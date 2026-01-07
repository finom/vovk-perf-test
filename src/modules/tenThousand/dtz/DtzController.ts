import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtz")
export default class DtzController {
  @operation({
    summary: "Get Dtz",
  })
  @get()
  static getDtz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dtz",
  })
  @post("{id}")
  static createDtz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
