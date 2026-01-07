import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mr")
export default class MrController {
  @operation({
    summary: "Get Mr",
  })
  @get()
  static getMr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mr",
  })
  @post("{id}")
  static createMr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
