import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drc")
export default class DrcController {
  @operation({
    summary: "Get Drc",
  })
  @get()
  static getDrc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Drc",
  })
  @post("{id}")
  static createDrc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
