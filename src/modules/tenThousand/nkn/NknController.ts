import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkn")
export default class NknController {
  @operation({
    summary: "Get Nkn",
  })
  @get()
  static getNkn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nkn",
  })
  @post("{id}")
  static createNkn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
