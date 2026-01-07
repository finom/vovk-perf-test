import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eop")
export default class EopController {
  @operation({
    summary: "Get Eop",
  })
  @get()
  static getEop = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eop",
  })
  @post("{id}")
  static createEop = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
