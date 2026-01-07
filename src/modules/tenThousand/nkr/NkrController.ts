import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkr")
export default class NkrController {
  @operation({
    summary: "Get Nkr",
  })
  @get()
  static getNkr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nkr",
  })
  @post("{id}")
  static createNkr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
