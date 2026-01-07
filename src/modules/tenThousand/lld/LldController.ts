import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lld")
export default class LldController {
  @operation({
    summary: "Get Lld",
  })
  @get()
  static getLld = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lld",
  })
  @post("{id}")
  static createLld = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
