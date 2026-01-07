import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkm")
export default class JkmController {
  @operation({
    summary: "Get Jkm",
  })
  @get()
  static getJkm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jkm",
  })
  @post("{id}")
  static createJkm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
