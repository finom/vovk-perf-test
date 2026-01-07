import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhz")
export default class DhzController {
  @operation({
    summary: "Get Dhz",
  })
  @get()
  static getDhz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dhz",
  })
  @post("{id}")
  static createDhz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
