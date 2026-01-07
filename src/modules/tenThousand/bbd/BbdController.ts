import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbd")
export default class BbdController {
  @operation({
    summary: "Get Bbd",
  })
  @get()
  static getBbd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbd",
  })
  @post("{id}")
  static createBbd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
