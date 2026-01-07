import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnj")
export default class NnjController {
  @operation({
    summary: "Get Nnj",
  })
  @get()
  static getNnj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nnj",
  })
  @post("{id}")
  static createNnj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
