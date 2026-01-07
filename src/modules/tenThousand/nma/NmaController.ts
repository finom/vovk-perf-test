import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nma")
export default class NmaController {
  @operation({
    summary: "Get Nma",
  })
  @get()
  static getNma = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nma",
  })
  @post("{id}")
  static createNma = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
