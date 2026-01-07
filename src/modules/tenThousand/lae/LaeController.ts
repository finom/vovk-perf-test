import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lae")
export default class LaeController {
  @operation({
    summary: "Get Lae",
  })
  @get()
  static getLae = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lae",
  })
  @post("{id}")
  static createLae = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
