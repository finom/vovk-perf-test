import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nli")
export default class NliController {
  @operation({
    summary: "Get Nli",
  })
  @get()
  static getNli = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nli",
  })
  @post("{id}")
  static createNli = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
