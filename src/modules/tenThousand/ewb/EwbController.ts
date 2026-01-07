import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewb")
export default class EwbController {
  @operation({
    summary: "Get Ewb",
  })
  @get()
  static getEwb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ewb",
  })
  @post("{id}")
  static createEwb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
