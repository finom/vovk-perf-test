import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkj")
export default class NkjController {
  @operation({
    summary: "Get Nkj",
  })
  @get()
  static getNkj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nkj",
  })
  @post("{id}")
  static createNkj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
