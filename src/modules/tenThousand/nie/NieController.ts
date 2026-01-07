import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nie")
export default class NieController {
  @operation({
    summary: "Get Nie",
  })
  @get()
  static getNie = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nie",
  })
  @post("{id}")
  static createNie = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
