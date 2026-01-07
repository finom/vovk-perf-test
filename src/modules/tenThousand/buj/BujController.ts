import { procedure, prefix, get, post, operation } from "vovk";

@prefix("buj")
export default class BujController {
  @operation({
    summary: "Get Buj",
  })
  @get()
  static getBuj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Buj",
  })
  @post("{id}")
  static createBuj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
