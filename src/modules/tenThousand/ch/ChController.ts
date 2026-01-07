import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ch")
export default class ChController {
  @operation({
    summary: "Get Ch",
  })
  @get()
  static getCh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ch",
  })
  @post("{id}")
  static createCh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
