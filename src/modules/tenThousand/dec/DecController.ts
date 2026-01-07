import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dec")
export default class DecController {
  @operation({
    summary: "Get Dec",
  })
  @get()
  static getDec = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dec",
  })
  @post("{id}")
  static createDec = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
