import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqv")
export default class NqvController {
  @operation({
    summary: "Get Nqv",
  })
  @get()
  static getNqv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqv",
  })
  @post("{id}")
  static createNqv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
