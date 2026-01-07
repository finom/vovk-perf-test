import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsa")
export default class NsaController {
  @operation({
    summary: "Get Nsa",
  })
  @get()
  static getNsa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nsa",
  })
  @post("{id}")
  static createNsa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
