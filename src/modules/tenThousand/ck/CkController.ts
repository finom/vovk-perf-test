import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ck")
export default class CkController {
  @operation({
    summary: "Get Ck",
  })
  @get()
  static getCk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ck",
  })
  @post("{id}")
  static createCk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
