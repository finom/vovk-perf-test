import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccb")
export default class CcbController {
  @operation({
    summary: "Get Ccb",
  })
  @get()
  static getCcb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ccb",
  })
  @post("{id}")
  static createCcb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
