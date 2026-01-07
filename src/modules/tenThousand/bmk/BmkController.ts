import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmk")
export default class BmkController {
  @operation({
    summary: "Get Bmk",
  })
  @get()
  static getBmk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmk",
  })
  @post("{id}")
  static createBmk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
