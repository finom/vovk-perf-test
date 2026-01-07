import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfh")
export default class CfhController {
  @operation({
    summary: "Get Cfh",
  })
  @get()
  static getCfh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cfh",
  })
  @post("{id}")
  static createCfh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
