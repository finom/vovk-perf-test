import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdd")
export default class CddController {
  @operation({
    summary: "Get Cdd",
  })
  @get()
  static getCdd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cdd",
  })
  @post("{id}")
  static createCdd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
