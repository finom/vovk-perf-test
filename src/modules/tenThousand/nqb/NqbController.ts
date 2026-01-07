import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqb")
export default class NqbController {
  @operation({
    summary: "Get Nqb",
  })
  @get()
  static getNqb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqb",
  })
  @post("{id}")
  static createNqb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
