import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyw")
export default class CywController {
  @operation({
    summary: "Get Cyw",
  })
  @get()
  static getCyw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cyw",
  })
  @post("{id}")
  static createCyw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
