import { procedure, prefix, get, post, operation } from "vovk";

@prefix("any")
export default class AnyController {
  @operation({
    summary: "Get Any",
  })
  @get()
  static getAny = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Any",
  })
  @post("{id}")
  static createAny = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
