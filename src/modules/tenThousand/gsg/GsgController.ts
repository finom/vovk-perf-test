import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsg")
export default class GsgController {
  @operation({
    summary: "Get Gsg",
  })
  @get()
  static getGsg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gsg",
  })
  @post("{id}")
  static createGsg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
