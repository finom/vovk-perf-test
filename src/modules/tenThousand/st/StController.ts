import { procedure, prefix, get, post, operation } from "vovk";

@prefix("st")
export default class StController {
  @operation({
    summary: "Get St",
  })
  @get()
  static getSt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create St",
  })
  @post("{id}")
  static createSt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
