import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndv")
export default class NdvController {
  @operation({
    summary: "Get Ndv",
  })
  @get()
  static getNdv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ndv",
  })
  @post("{id}")
  static createNdv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
