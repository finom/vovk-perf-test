import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndl")
export default class NdlController {
  @operation({
    summary: "Get Ndl",
  })
  @get()
  static getNdl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ndl",
  })
  @post("{id}")
  static createNdl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
