import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lt")
export default class LtController {
  @operation({
    summary: "Get Lt",
  })
  @get()
  static getLt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lt",
  })
  @post("{id}")
  static createLt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
