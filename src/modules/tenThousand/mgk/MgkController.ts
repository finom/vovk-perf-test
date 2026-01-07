import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgk")
export default class MgkController {
  @operation({
    summary: "Get Mgk",
  })
  @get()
  static getMgk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgk",
  })
  @post("{id}")
  static createMgk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
