import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsg")
export default class DsgController {
  @operation({
    summary: "Get Dsg",
  })
  @get()
  static getDsg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dsg",
  })
  @post("{id}")
  static createDsg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
