import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpc")
export default class FpcController {
  @operation({
    summary: "Get Fpc",
  })
  @get()
  static getFpc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpc",
  })
  @post("{id}")
  static createFpc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
