import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btz")
export default class BtzController {
  @operation({
    summary: "Get Btz",
  })
  @get()
  static getBtz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Btz",
  })
  @post("{id}")
  static createBtz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
