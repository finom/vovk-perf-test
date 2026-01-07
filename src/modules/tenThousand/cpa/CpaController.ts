import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpa")
export default class CpaController {
  @operation({
    summary: "Get Cpa",
  })
  @get()
  static getCpa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cpa",
  })
  @post("{id}")
  static createCpa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
