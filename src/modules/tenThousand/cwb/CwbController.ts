import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwb")
export default class CwbController {
  @operation({
    summary: "Get Cwb",
  })
  @get()
  static getCwb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwb",
  })
  @post("{id}")
  static createCwb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
