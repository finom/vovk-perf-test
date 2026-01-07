import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnf")
export default class NnfController {
  @operation({
    summary: "Get Nnf",
  })
  @get()
  static getNnf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nnf",
  })
  @post("{id}")
  static createNnf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
