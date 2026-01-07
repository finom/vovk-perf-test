import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbf")
export default class CbfController {
  @operation({
    summary: "Get Cbf",
  })
  @get()
  static getCbf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cbf",
  })
  @post("{id}")
  static createCbf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
