import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkq")
export default class NkqController {
  @operation({
    summary: "Get Nkq",
  })
  @get()
  static getNkq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nkq",
  })
  @post("{id}")
  static createNkq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
