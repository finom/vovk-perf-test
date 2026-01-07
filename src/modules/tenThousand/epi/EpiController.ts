import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epi")
export default class EpiController {
  @operation({
    summary: "Get Epi",
  })
  @get()
  static getEpi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Epi",
  })
  @post("{id}")
  static createEpi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
