import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gly")
export default class GlyController {
  @operation({
    summary: "Get Gly",
  })
  @get()
  static getGly = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gly",
  })
  @post("{id}")
  static createGly = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
