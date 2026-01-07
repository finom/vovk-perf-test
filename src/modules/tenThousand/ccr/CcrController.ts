import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccr")
export default class CcrController {
  @operation({
    summary: "Get Ccr",
  })
  @get()
  static getCcr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ccr",
  })
  @post("{id}")
  static createCcr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
