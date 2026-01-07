import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kt")
export default class KtController {
  @operation({
    summary: "Get Kt",
  })
  @get()
  static getKt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kt",
  })
  @post("{id}")
  static createKt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
