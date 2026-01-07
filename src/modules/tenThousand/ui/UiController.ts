import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ui")
export default class UiController {
  @operation({
    summary: "Get Ui",
  })
  @get()
  static getUi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ui",
  })
  @post("{id}")
  static createUi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
