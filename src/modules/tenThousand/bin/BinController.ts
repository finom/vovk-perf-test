import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bin")
export default class BinController {
  @operation({
    summary: "Get Bin",
  })
  @get()
  static getBin = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bin",
  })
  @post("{id}")
  static createBin = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
