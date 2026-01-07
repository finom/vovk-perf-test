import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndw")
export default class NdwController {
  @operation({
    summary: "Get Ndw",
  })
  @get()
  static getNdw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ndw",
  })
  @post("{id}")
  static createNdw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
