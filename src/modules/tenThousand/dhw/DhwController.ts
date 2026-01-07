import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhw")
export default class DhwController {
  @operation({
    summary: "Get Dhw",
  })
  @get()
  static getDhw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dhw",
  })
  @post("{id}")
  static createDhw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
