import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyn")
export default class LynController {
  @operation({
    summary: "Get Lyn",
  })
  @get()
  static getLyn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lyn",
  })
  @post("{id}")
  static createLyn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
