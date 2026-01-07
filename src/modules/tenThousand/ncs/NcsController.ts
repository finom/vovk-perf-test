import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncs")
export default class NcsController {
  @operation({
    summary: "Get Ncs",
  })
  @get()
  static getNcs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ncs",
  })
  @post("{id}")
  static createNcs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
