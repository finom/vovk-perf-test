import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwk")
export default class FwkController {
  @operation({
    summary: "Get Fwk",
  })
  @get()
  static getFwk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwk",
  })
  @post("{id}")
  static createFwk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
