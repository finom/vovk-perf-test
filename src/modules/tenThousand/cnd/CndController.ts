import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnd")
export default class CndController {
  @operation({
    summary: "Get Cnd",
  })
  @get()
  static getCnd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cnd",
  })
  @post("{id}")
  static createCnd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
