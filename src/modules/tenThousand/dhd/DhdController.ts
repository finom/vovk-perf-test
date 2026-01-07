import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhd")
export default class DhdController {
  @operation({
    summary: "Get Dhd",
  })
  @get()
  static getDhd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dhd",
  })
  @post("{id}")
  static createDhd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
