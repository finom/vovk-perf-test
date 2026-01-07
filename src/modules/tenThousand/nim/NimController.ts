import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nim")
export default class NimController {
  @operation({
    summary: "Get Nim",
  })
  @get()
  static getNim = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nim",
  })
  @post("{id}")
  static createNim = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
