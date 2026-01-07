import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dem")
export default class DemController {
  @operation({
    summary: "Get Dem",
  })
  @get()
  static getDem = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dem",
  })
  @post("{id}")
  static createDem = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
