import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnk")
export default class MnkController {
  @operation({
    summary: "Get Mnk",
  })
  @get()
  static getMnk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mnk",
  })
  @post("{id}")
  static createMnk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
