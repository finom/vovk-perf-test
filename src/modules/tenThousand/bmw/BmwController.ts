import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmw")
export default class BmwController {
  @operation({
    summary: "Get Bmw",
  })
  @get()
  static getBmw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmw",
  })
  @post("{id}")
  static createBmw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
