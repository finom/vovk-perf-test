import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkd")
export default class NkdController {
  @operation({
    summary: "Get Nkd",
  })
  @get()
  static getNkd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nkd",
  })
  @post("{id}")
  static createNkd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
