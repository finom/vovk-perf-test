import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nil")
export default class NilController {
  @operation({
    summary: "Get Nil",
  })
  @get()
  static getNil = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nil",
  })
  @post("{id}")
  static createNil = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
