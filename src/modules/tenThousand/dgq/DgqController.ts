import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgq")
export default class DgqController {
  @operation({
    summary: "Get Dgq",
  })
  @get()
  static getDgq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgq",
  })
  @post("{id}")
  static createDgq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
