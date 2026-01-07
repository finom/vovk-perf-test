import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brk")
export default class BrkController {
  @operation({
    summary: "Get Brk",
  })
  @get()
  static getBrk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Brk",
  })
  @post("{id}")
  static createBrk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
