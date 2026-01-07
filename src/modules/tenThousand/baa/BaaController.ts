import { procedure, prefix, get, post, operation } from "vovk";

@prefix("baa")
export default class BaaController {
  @operation({
    summary: "Get Baa",
  })
  @get()
  static getBaa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Baa",
  })
  @post("{id}")
  static createBaa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
