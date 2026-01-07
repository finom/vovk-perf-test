import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckc")
export default class CkcController {
  @operation({
    summary: "Get Ckc",
  })
  @get()
  static getCkc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ckc",
  })
  @post("{id}")
  static createCkc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
