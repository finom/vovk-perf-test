import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfk")
export default class CfkController {
  @operation({
    summary: "Get Cfk",
  })
  @get()
  static getCfk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cfk",
  })
  @post("{id}")
  static createCfk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
