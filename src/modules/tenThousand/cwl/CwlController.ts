import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwl")
export default class CwlController {
  @operation({
    summary: "Get Cwl",
  })
  @get()
  static getCwl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwl",
  })
  @post("{id}")
  static createCwl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
