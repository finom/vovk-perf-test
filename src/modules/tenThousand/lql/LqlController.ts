import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lql")
export default class LqlController {
  @operation({
    summary: "Get Lql",
  })
  @get()
  static getLql = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lql",
  })
  @post("{id}")
  static createLql = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
