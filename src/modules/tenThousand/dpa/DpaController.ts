import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpa")
export default class DpaController {
  @operation({
    summary: "Get Dpa",
  })
  @get()
  static getDpa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dpa",
  })
  @post("{id}")
  static createDpa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
