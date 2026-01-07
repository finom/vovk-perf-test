import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsl")
export default class DslController {
  @operation({
    summary: "Get Dsl",
  })
  @get()
  static getDsl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dsl",
  })
  @post("{id}")
  static createDsl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
