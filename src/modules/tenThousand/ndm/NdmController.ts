import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndm")
export default class NdmController {
  @operation({
    summary: "Get Ndm",
  })
  @get()
  static getNdm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ndm",
  })
  @post("{id}")
  static createNdm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
