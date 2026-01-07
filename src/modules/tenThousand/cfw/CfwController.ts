import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfw")
export default class CfwController {
  @operation({
    summary: "Get Cfw",
  })
  @get()
  static getCfw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cfw",
  })
  @post("{id}")
  static createCfw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
