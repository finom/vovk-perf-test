import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhq")
export default class DhqController {
  @operation({
    summary: "Get Dhq",
  })
  @get()
  static getDhq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dhq",
  })
  @post("{id}")
  static createDhq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
