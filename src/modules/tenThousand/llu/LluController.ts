import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llu")
export default class LluController {
  @operation({
    summary: "Get Llu",
  })
  @get()
  static getLlu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Llu",
  })
  @post("{id}")
  static createLlu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
