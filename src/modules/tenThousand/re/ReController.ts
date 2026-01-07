import { procedure, prefix, get, post, operation } from "vovk";

@prefix("re")
export default class ReController {
  @operation({
    summary: "Get Re",
  })
  @get()
  static getRe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Re",
  })
  @post("{id}")
  static createRe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
