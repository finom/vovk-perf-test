import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqg")
export default class NqgController {
  @operation({
    summary: "Get Nqg",
  })
  @get()
  static getNqg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqg",
  })
  @post("{id}")
  static createNqg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
