import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atl")
export default class AtlController {
  @operation({
    summary: "Get Atl",
  })
  @get()
  static getAtl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Atl",
  })
  @post("{id}")
  static createAtl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
