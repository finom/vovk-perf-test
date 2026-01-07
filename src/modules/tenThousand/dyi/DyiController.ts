import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyi")
export default class DyiController {
  @operation({
    summary: "Get Dyi",
  })
  @get()
  static getDyi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dyi",
  })
  @post("{id}")
  static createDyi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
