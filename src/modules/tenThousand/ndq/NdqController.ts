import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndq")
export default class NdqController {
  @operation({
    summary: "Get Ndq",
  })
  @get()
  static getNdq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ndq",
  })
  @post("{id}")
  static createNdq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
