import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhm")
export default class BhmController {
  @operation({
    summary: "Get Bhm",
  })
  @get()
  static getBhm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhm",
  })
  @post("{id}")
  static createBhm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
