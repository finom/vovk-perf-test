import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lts")
export default class LtsController {
  @operation({
    summary: "Get Lts",
  })
  @get()
  static getLts = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lts",
  })
  @post("{id}")
  static createLts = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
