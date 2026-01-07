import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bju")
export default class BjuController {
  @operation({
    summary: "Get Bju",
  })
  @get()
  static getBju = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bju",
  })
  @post("{id}")
  static createBju = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
