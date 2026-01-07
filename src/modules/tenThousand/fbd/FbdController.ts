import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbd")
export default class FbdController {
  @operation({
    summary: "Get Fbd",
  })
  @get()
  static getFbd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbd",
  })
  @post("{id}")
  static createFbd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
