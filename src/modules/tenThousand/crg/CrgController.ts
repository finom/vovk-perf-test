import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crg")
export default class CrgController {
  @operation({
    summary: "Get Crg",
  })
  @get()
  static getCrg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Crg",
  })
  @post("{id}")
  static createCrg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
