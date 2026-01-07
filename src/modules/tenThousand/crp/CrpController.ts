import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crp")
export default class CrpController {
  @operation({
    summary: "Get Crp",
  })
  @get()
  static getCrp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Crp",
  })
  @post("{id}")
  static createCrp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
