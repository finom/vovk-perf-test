import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvc")
export default class BvcController {
  @operation({
    summary: "Get Bvc",
  })
  @get()
  static getBvc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvc",
  })
  @post("{id}")
  static createBvc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
