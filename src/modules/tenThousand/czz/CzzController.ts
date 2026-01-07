import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czz")
export default class CzzController {
  @operation({
    summary: "Get Czz",
  })
  @get()
  static getCzz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czz",
  })
  @post("{id}")
  static createCzz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
