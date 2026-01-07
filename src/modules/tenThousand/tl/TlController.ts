import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tl")
export default class TlController {
  @operation({
    summary: "Get Tl",
  })
  @get()
  static getTl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Tl",
  })
  @post("{id}")
  static createTl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
