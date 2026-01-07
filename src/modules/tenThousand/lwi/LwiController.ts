import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwi")
export default class LwiController {
  @operation({
    summary: "Get Lwi",
  })
  @get()
  static getLwi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwi",
  })
  @post("{id}")
  static createLwi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
