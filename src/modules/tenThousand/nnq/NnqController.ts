import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnq")
export default class NnqController {
  @operation({
    summary: "Get Nnq",
  })
  @get()
  static getNnq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nnq",
  })
  @post("{id}")
  static createNnq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
