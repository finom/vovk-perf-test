import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlt")
export default class HltController {
  @operation({
    summary: "Get Hlt",
  })
  @get()
  static getHlt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hlt",
  })
  @post("{id}")
  static createHlt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
