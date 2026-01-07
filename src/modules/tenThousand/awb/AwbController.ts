import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awb")
export default class AwbController {
  @operation({
    summary: "Get Awb",
  })
  @get()
  static getAwb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Awb",
  })
  @post("{id}")
  static createAwb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
