import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cly")
export default class ClyController {
  @operation({
    summary: "Get Cly",
  })
  @get()
  static getCly = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cly",
  })
  @post("{id}")
  static createCly = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
