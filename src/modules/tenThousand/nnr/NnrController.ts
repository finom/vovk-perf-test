import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnr")
export default class NnrController {
  @operation({
    summary: "Get Nnr",
  })
  @get()
  static getNnr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nnr",
  })
  @post("{id}")
  static createNnr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
