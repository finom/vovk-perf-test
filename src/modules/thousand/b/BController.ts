import { procedure, prefix, get, post, operation } from "vovk";

@prefix("b")
export default class BController {
  @operation({
    summary: "Get B",
  })
  @get()
  static getB = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create B",
  })
  @post("{id}")
  static createB = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
