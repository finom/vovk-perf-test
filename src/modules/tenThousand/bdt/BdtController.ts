import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdt")
export default class BdtController {
  @operation({
    summary: "Get Bdt",
  })
  @get()
  static getBdt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bdt",
  })
  @post("{id}")
  static createBdt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
