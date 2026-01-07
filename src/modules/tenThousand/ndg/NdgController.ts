import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndg")
export default class NdgController {
  @operation({
    summary: "Get Ndg",
  })
  @get()
  static getNdg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ndg",
  })
  @post("{id}")
  static createNdg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
