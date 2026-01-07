import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpc")
export default class CpcController {
  @operation({
    summary: "Get Cpc",
  })
  @get()
  static getCpc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cpc",
  })
  @post("{id}")
  static createCpc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
