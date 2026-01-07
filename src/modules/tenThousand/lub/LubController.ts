import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lub")
export default class LubController {
  @operation({
    summary: "Get Lub",
  })
  @get()
  static getLub = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lub",
  })
  @post("{id}")
  static createLub = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
