import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmk")
export default class MmkController {
  @operation({
    summary: "Get Mmk",
  })
  @get()
  static getMmk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mmk",
  })
  @post("{id}")
  static createMmk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
