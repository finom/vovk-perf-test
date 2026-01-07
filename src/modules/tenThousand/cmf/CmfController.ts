import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmf")
export default class CmfController {
  @operation({
    summary: "Get Cmf",
  })
  @get()
  static getCmf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cmf",
  })
  @post("{id}")
  static createCmf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
