import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npr")
export default class NprController {
  @operation({
    summary: "Get Npr",
  })
  @get()
  static getNpr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Npr",
  })
  @post("{id}")
  static createNpr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
