import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chk")
export default class ChkController {
  @operation({
    summary: "Get Chk",
  })
  @get()
  static getChk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Chk",
  })
  @post("{id}")
  static createChk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
