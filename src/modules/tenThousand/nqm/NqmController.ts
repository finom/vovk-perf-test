import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqm")
export default class NqmController {
  @operation({
    summary: "Get Nqm",
  })
  @get()
  static getNqm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqm",
  })
  @post("{id}")
  static createNqm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
