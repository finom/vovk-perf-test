import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxk")
export default class DxkController {
  @operation({
    summary: "Get Dxk",
  })
  @get()
  static getDxk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxk",
  })
  @post("{id}")
  static createDxk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
