import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mj")
export default class MjController {
  @operation({
    summary: "Get Mj",
  })
  @get()
  static getMj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mj",
  })
  @post("{id}")
  static createMj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
