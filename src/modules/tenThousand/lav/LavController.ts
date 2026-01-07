import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lav")
export default class LavController {
  @operation({
    summary: "Get Lav",
  })
  @get()
  static getLav = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lav",
  })
  @post("{id}")
  static createLav = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
