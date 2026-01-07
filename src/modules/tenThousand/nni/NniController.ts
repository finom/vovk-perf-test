import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nni")
export default class NniController {
  @operation({
    summary: "Get Nni",
  })
  @get()
  static getNni = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nni",
  })
  @post("{id}")
  static createNni = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
