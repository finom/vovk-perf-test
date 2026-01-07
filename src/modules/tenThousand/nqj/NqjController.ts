import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqj")
export default class NqjController {
  @operation({
    summary: "Get Nqj",
  })
  @get()
  static getNqj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqj",
  })
  @post("{id}")
  static createNqj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
