import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnw")
export default class NnwController {
  @operation({
    summary: "Get Nnw",
  })
  @get()
  static getNnw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nnw",
  })
  @post("{id}")
  static createNnw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
