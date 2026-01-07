import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqw")
export default class NqwController {
  @operation({
    summary: "Get Nqw",
  })
  @get()
  static getNqw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqw",
  })
  @post("{id}")
  static createNqw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
