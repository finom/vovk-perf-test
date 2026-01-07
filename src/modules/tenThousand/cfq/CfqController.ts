import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfq")
export default class CfqController {
  @operation({
    summary: "Get Cfq",
  })
  @get()
  static getCfq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cfq",
  })
  @post("{id}")
  static createCfq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
