import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwb")
export default class FwbController {
  @operation({
    summary: "Get Fwb",
  })
  @get()
  static getFwb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwb",
  })
  @post("{id}")
  static createFwb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
