import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltz")
export default class LtzController {
  @operation({
    summary: "Get Ltz",
  })
  @get()
  static getLtz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ltz",
  })
  @post("{id}")
  static createLtz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
