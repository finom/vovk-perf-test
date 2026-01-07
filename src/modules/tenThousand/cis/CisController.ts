import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cis")
export default class CisController {
  @operation({
    summary: "Get Cis",
  })
  @get()
  static getCis = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cis",
  })
  @post("{id}")
  static createCis = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
