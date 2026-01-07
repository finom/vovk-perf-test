import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhv")
export default class DhvController {
  @operation({
    summary: "Get Dhv",
  })
  @get()
  static getDhv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dhv",
  })
  @post("{id}")
  static createDhv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
