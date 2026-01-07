import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsm")
export default class HsmController {
  @operation({
    summary: "Get Hsm",
  })
  @get()
  static getHsm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hsm",
  })
  @post("{id}")
  static createHsm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
