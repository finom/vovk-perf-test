import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npa")
export default class NpaController {
  @operation({
    summary: "Get Npa",
  })
  @get()
  static getNpa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Npa",
  })
  @post("{id}")
  static createNpa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
