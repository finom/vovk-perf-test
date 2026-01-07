import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnc")
export default class BncController {
  @operation({
    summary: "Get Bnc",
  })
  @get()
  static getBnc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bnc",
  })
  @post("{id}")
  static createBnc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
