import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bky")
export default class BkyController {
  @operation({
    summary: "Get Bky",
  })
  @get()
  static getBky = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bky",
  })
  @post("{id}")
  static createBky = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
