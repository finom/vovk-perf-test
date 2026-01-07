import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhm")
export default class DhmController {
  @operation({
    summary: "Get Dhm",
  })
  @get()
  static getDhm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dhm",
  })
  @post("{id}")
  static createDhm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
