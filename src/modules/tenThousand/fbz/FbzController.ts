import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbz")
export default class FbzController {
  @operation({
    summary: "Get Fbz",
  })
  @get()
  static getFbz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbz",
  })
  @post("{id}")
  static createFbz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
