import { procedure, prefix, get, post, operation } from "vovk";

@prefix("luj")
export default class LujController {
  @operation({
    summary: "Get Luj",
  })
  @get()
  static getLuj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Luj",
  })
  @post("{id}")
  static createLuj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
