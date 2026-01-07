import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctz")
export default class CtzController {
  @operation({
    summary: "Get Ctz",
  })
  @get()
  static getCtz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ctz",
  })
  @post("{id}")
  static createCtz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
