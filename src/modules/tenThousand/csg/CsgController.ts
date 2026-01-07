import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csg")
export default class CsgController {
  @operation({
    summary: "Get Csg",
  })
  @get()
  static getCsg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Csg",
  })
  @post("{id}")
  static createCsg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
