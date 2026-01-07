import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhk")
export default class DhkController {
  @operation({
    summary: "Get Dhk",
  })
  @get()
  static getDhk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dhk",
  })
  @post("{id}")
  static createDhk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
