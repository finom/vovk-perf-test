import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtr")
export default class DtrController {
  @operation({
    summary: "Get Dtr",
  })
  @get()
  static getDtr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dtr",
  })
  @post("{id}")
  static createDtr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
