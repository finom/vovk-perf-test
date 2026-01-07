import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csz")
export default class CszController {
  @operation({
    summary: "Get Csz",
  })
  @get()
  static getCsz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Csz",
  })
  @post("{id}")
  static createCsz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
