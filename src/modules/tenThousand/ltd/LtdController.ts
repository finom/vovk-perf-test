import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltd")
export default class LtdController {
  @operation({
    summary: "Get Ltd",
  })
  @get()
  static getLtd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ltd",
  })
  @post("{id}")
  static createLtd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
