import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfc")
export default class CfcController {
  @operation({
    summary: "Get Cfc",
  })
  @get()
  static getCfc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cfc",
  })
  @post("{id}")
  static createCfc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
