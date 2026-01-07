import { procedure, prefix, get, post, operation } from "vovk";

@prefix("noh")
export default class NohController {
  @operation({
    summary: "Get Noh",
  })
  @get()
  static getNoh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Noh",
  })
  @post("{id}")
  static createNoh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
