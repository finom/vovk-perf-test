import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nta")
export default class NtaController {
  @operation({
    summary: "Get Nta",
  })
  @get()
  static getNta = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nta",
  })
  @post("{id}")
  static createNta = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
