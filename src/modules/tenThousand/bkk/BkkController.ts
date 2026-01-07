import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkk")
export default class BkkController {
  @operation({
    summary: "Get Bkk",
  })
  @get()
  static getBkk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bkk",
  })
  @post("{id}")
  static createBkk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
