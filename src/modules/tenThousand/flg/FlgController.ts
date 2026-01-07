import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flg")
export default class FlgController {
  @operation({
    summary: "Get Flg",
  })
  @get()
  static getFlg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Flg",
  })
  @post("{id}")
  static createFlg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
