import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nab")
export default class NabController {
  @operation({
    summary: "Get Nab",
  })
  @get()
  static getNab = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nab",
  })
  @post("{id}")
  static createNab = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
