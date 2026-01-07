import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvc")
export default class JvcController {
  @operation({
    summary: "Get Jvc",
  })
  @get()
  static getJvc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jvc",
  })
  @post("{id}")
  static createJvc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
