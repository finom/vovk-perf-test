import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhp")
export default class DhpController {
  @operation({
    summary: "Get Dhp",
  })
  @get()
  static getDhp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dhp",
  })
  @post("{id}")
  static createDhp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
