import { procedure, prefix, get, post, operation } from "vovk";

@prefix("coj")
export default class CojController {
  @operation({
    summary: "Get Coj",
  })
  @get()
  static getCoj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Coj",
  })
  @post("{id}")
  static createCoj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
