import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mab")
export default class MabController {
  @operation({
    summary: "Get Mab",
  })
  @get()
  static getMab = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mab",
  })
  @post("{id}")
  static createMab = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
