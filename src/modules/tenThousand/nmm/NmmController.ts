import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmm")
export default class NmmController {
  @operation({
    summary: "Get Nmm",
  })
  @get()
  static getNmm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nmm",
  })
  @post("{id}")
  static createNmm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
