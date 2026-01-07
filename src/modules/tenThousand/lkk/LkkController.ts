import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkk")
export default class LkkController {
  @operation({
    summary: "Get Lkk",
  })
  @get()
  static getLkk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lkk",
  })
  @post("{id}")
  static createLkk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
