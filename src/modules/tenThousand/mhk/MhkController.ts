import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhk")
export default class MhkController {
  @operation({
    summary: "Get Mhk",
  })
  @get()
  static getMhk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mhk",
  })
  @post("{id}")
  static createMhk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
