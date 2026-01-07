import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhg")
export default class DhgController {
  @operation({
    summary: "Get Dhg",
  })
  @get()
  static getDhg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dhg",
  })
  @post("{id}")
  static createDhg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
