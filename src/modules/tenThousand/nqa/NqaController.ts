import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqa")
export default class NqaController {
  @operation({
    summary: "Get Nqa",
  })
  @get()
  static getNqa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqa",
  })
  @post("{id}")
  static createNqa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
