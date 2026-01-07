import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mle")
export default class MleController {
  @operation({
    summary: "Get Mle",
  })
  @get()
  static getMle = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mle",
  })
  @post("{id}")
  static createMle = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
