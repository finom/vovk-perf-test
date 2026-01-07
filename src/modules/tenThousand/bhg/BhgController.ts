import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhg")
export default class BhgController {
  @operation({
    summary: "Get Bhg",
  })
  @get()
  static getBhg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhg",
  })
  @post("{id}")
  static createBhg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
