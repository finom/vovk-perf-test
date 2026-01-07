import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhw")
export default class BhwController {
  @operation({
    summary: "Get Bhw",
  })
  @get()
  static getBhw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhw",
  })
  @post("{id}")
  static createBhw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
