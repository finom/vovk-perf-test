import { procedure, prefix, get, post, operation } from "vovk";

@prefix("duy")
export default class DuyController {
  @operation({
    summary: "Get Duy",
  })
  @get()
  static getDuy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Duy",
  })
  @post("{id}")
  static createDuy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
