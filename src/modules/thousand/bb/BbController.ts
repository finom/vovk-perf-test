import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bb")
export default class BbController {
  @operation({
    summary: "Get Bb",
  })
  @get()
  static getBb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bb",
  })
  @post("{id}")
  static createBb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
