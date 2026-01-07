import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxu")
export default class BxuController {
  @operation({
    summary: "Get Bxu",
  })
  @get()
  static getBxu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxu",
  })
  @post("{id}")
  static createBxu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
