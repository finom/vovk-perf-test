import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rl")
export default class RlController {
  @operation({
    summary: "Get Rl",
  })
  @get()
  static getRl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Rl",
  })
  @post("{id}")
  static createRl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
