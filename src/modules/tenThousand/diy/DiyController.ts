import { procedure, prefix, get, post, operation } from "vovk";

@prefix("diy")
export default class DiyController {
  @operation({
    summary: "Get Diy",
  })
  @get()
  static getDiy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Diy",
  })
  @post("{id}")
  static createDiy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
