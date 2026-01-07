import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfl")
export default class LflController {
  @operation({
    summary: "Get Lfl",
  })
  @get()
  static getLfl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfl",
  })
  @post("{id}")
  static createLfl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
