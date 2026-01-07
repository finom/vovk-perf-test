import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnc")
export default class NncController {
  @operation({
    summary: "Get Nnc",
  })
  @get()
  static getNnc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nnc",
  })
  @post("{id}")
  static createNnc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
