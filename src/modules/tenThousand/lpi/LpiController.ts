import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpi")
export default class LpiController {
  @operation({
    summary: "Get Lpi",
  })
  @get()
  static getLpi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpi",
  })
  @post("{id}")
  static createLpi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
