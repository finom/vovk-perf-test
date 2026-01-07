import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwk")
export default class CwkController {
  @operation({
    summary: "Get Cwk",
  })
  @get()
  static getCwk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwk",
  })
  @post("{id}")
  static createCwk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
