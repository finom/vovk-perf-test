import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndo")
export default class NdoController {
  @operation({
    summary: "Get Ndo",
  })
  @get()
  static getNdo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ndo",
  })
  @post("{id}")
  static createNdo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
