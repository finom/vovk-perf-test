import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lb")
export default class LbController {
  @operation({
    summary: "Get Lb",
  })
  @get()
  static getLb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lb",
  })
  @post("{id}")
  static createLb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
