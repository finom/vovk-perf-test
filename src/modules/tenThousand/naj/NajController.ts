import { procedure, prefix, get, post, operation } from "vovk";

@prefix("naj")
export default class NajController {
  @operation({
    summary: "Get Naj",
  })
  @get()
  static getNaj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Naj",
  })
  @post("{id}")
  static createNaj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
