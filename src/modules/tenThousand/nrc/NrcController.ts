import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrc")
export default class NrcController {
  @operation({
    summary: "Get Nrc",
  })
  @get()
  static getNrc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nrc",
  })
  @post("{id}")
  static createNrc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
