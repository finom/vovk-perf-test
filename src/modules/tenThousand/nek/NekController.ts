import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nek")
export default class NekController {
  @operation({
    summary: "Get Nek",
  })
  @get()
  static getNek = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nek",
  })
  @post("{id}")
  static createNek = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
