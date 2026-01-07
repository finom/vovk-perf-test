import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccf")
export default class CcfController {
  @operation({
    summary: "Get Ccf",
  })
  @get()
  static getCcf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ccf",
  })
  @post("{id}")
  static createCcf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
