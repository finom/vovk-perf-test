import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brd")
export default class BrdController {
  @operation({
    summary: "Get Brd",
  })
  @get()
  static getBrd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Brd",
  })
  @post("{id}")
  static createBrd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
