import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lix")
export default class LixController {
  @operation({
    summary: "Get Lix",
  })
  @get()
  static getLix = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lix",
  })
  @post("{id}")
  static createLix = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
