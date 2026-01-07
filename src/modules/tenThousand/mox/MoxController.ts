import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mox")
export default class MoxController {
  @operation({
    summary: "Get Mox",
  })
  @get()
  static getMox = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mox",
  })
  @post("{id}")
  static createMox = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
