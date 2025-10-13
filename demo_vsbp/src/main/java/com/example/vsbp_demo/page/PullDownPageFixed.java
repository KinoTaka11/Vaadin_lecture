package com.example.vsbp_demo.page;

import com.example.vsbp_demo.data.AuthUser;
import com.example.vsbp_demo.service.IUserService;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.select.Select;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;

import java.util.List;
import java.util.Optional;

@AnonymousAllowed
@Route("PullDownFixed")
public class PullDownPageFixed extends VerticalLayout {

    private final IUserService userService;

    public PullDownPageFixed(IUserService userService) {
        this.userService = userService;

        var top = new H1("プルダウンメニューによる選択");
        var title = new H2("このシステムに登録されているユーザ一の一覧");
        var selectedModel = userService.findAuthUsers();

        // ComboBoxでの例
        // getPullDownByComboBox()はクラス内で定義したプライベートメソッド
        ComboBox<AuthUser> pullDownByComboBox = getPullDownByComboBox(selectedModel);

        var sendButtonForComboBox = new Button("送信");
        sendButtonForComboBox.addClickListener(clickEvent -> {
            // 空の時に送信処理中断
            if (pullDownByComboBox.getValue() == null) {
                Notification.show("ドロップダウンで選択してください");
                return;
            }
            System.out.println(pullDownByComboBox.getValue());
        });
        // ComboBoxには選択取り消し用のメソッドがVaadinで用意されている(pullDown.setClearButtonVisible(true)で有効化)。

        // Selectでの例
        // getPullDownBySelect()はクラス内で定義したプライベートメソッド
        Select<AuthUser> pullDownBySelect = getPullDownBySelect(selectedModel);

        // SelectにはVaadinで選択取り消し用の機能は用意されていないので自分で追加します。
        var setEmptyButtonForPullDown = new Button("プルダウンの選択を取り消す");
        setEmptyButtonForPullDown.addClickListener(clickEvent -> {
            pullDownBySelect.setValue(null);
        });

        var sendButtonForSelect = new Button("送信");
        sendButtonForSelect.addClickListener(clickEvent -> {
            // 空の時に送信処理中断
            if (pullDownBySelect.getValue() == null) {
                Notification.show("ドロップダウンで選択してください");
                return;
            }
            System.out.println(pullDownBySelect.getValue());
        });
        //SelectにはVaadinで選択取り消し用の機能は用意されていないので自分で追加します。

        // 判別用の記し
        var comboBoxSign = new Paragraph("こっちがコンボボックス");
        var selectSign = new Paragraph("こっちがセレクト");

        // ComboBox関連の配置
        var pullDownByComboBoxVerticalLayout = new VerticalLayout(comboBoxSign, pullDownByComboBox, sendButtonForComboBox);
        // Select関連の配置
        var pullDownBySelectVerticalLayout = new VerticalLayout(selectSign, pullDownBySelect, setEmptyButtonForPullDown, sendButtonForSelect);
        // ComboBoxとSelectを横に並べる
        var twoTypesPullDownLayout = new HorizontalLayout(pullDownByComboBoxVerticalLayout, pullDownBySelectVerticalLayout);

        add(top, title, twoTypesPullDownLayout);
    }

    private ComboBox<AuthUser> getPullDownByComboBox(List<AuthUser> selectedModel) {

        // ComboBoxでの例
        ComboBox<AuthUser> pullDown = new ComboBox<>();
        pullDown.setPlaceholder("選んでください");
        pullDown.setItems(selectedModel);

        // 何も選択していない状態に戻す手法
        pullDown.setClearButtonVisible(true);

        //ドロップダウンに表示されるラベルの指定
        pullDown.setItemLabelGenerator(AuthUser::userName);

        // ドロップダウンメニューの初期値設定
        Optional.ofNullable(selectedModel)
                .ifPresent(user ->
                        pullDown.setValue(selectedModel.getFirst()));

        // 未選択時の注記処理
        pullDown.setRequiredIndicatorVisible(true);
        pullDown.setI18n(new ComboBox.ComboBoxI18n()
                .setRequiredErrorMessage("選択してください"));
        return pullDown;
    }

    private Select<AuthUser> getPullDownBySelect(List<AuthUser> selectedModel) {

        // Selectでの例
        Select<AuthUser> pullDown = new Select<>();
        pullDown.setPlaceholder("選んでください");
        pullDown.setItems(selectedModel);

        //ドロップダウンに表示されるラベルの指定
        pullDown.setItemLabelGenerator(AuthUser::userName);

        // ドロップダウンメニューの初期値設定
        Optional.ofNullable(selectedModel)
                .ifPresent(user ->
                        pullDown.setValue(selectedModel.getFirst()));

        // 未選択時の注記処理
        pullDown.setRequiredIndicatorVisible(true);
        pullDown.setI18n(new Select.SelectI18n()
                .setRequiredErrorMessage("選択してください"));
        return pullDown;
    }

}