import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmk")
export default class LmkController {
  @operation({
    summary: "Get Lmk",
  })
  @get()
  static getLmk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lmk",
  })
  @post("{id}")
  static createLmk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
