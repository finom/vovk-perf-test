import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfz")
export default class CfzController {
  @operation({
    summary: "Get Cfz",
  })
  @get()
  static getCfz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cfz",
  })
  @post("{id}")
  static createCfz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
