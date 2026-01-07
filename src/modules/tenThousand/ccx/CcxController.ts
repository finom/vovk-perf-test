import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccx")
export default class CcxController {
  @operation({
    summary: "Get Ccx",
  })
  @get()
  static getCcx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ccx",
  })
  @post("{id}")
  static createCcx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
