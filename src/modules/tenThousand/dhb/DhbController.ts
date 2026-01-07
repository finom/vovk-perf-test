import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhb")
export default class DhbController {
  @operation({
    summary: "Get Dhb",
  })
  @get()
  static getDhb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dhb",
  })
  @post("{id}")
  static createDhb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
