import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndn")
export default class NdnController {
  @operation({
    summary: "Get Ndn",
  })
  @get()
  static getNdn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ndn",
  })
  @post("{id}")
  static createNdn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
