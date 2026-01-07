import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhb")
export default class BhbController {
  @operation({
    summary: "Get Bhb",
  })
  @get()
  static getBhb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhb",
  })
  @post("{id}")
  static createBhb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
