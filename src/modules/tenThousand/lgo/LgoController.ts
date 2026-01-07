import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgo")
export default class LgoController {
  @operation({
    summary: "Get Lgo",
  })
  @get()
  static getLgo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgo",
  })
  @post("{id}")
  static createLgo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
