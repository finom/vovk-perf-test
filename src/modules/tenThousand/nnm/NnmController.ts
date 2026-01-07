import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnm")
export default class NnmController {
  @operation({
    summary: "Get Nnm",
  })
  @get()
  static getNnm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nnm",
  })
  @post("{id}")
  static createNnm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
