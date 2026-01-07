import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bap")
export default class BapController {
  @operation({
    summary: "Get Bap",
  })
  @get()
  static getBap = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bap",
  })
  @post("{id}")
  static createBap = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
