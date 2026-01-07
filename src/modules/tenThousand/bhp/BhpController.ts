import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhp")
export default class BhpController {
  @operation({
    summary: "Get Bhp",
  })
  @get()
  static getBhp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhp",
  })
  @post("{id}")
  static createBhp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
