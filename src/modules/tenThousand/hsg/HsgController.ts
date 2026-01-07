import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsg")
export default class HsgController {
  @operation({
    summary: "Get Hsg",
  })
  @get()
  static getHsg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hsg",
  })
  @post("{id}")
  static createHsg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
