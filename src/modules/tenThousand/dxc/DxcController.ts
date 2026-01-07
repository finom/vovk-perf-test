import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxc")
export default class DxcController {
  @operation({
    summary: "Get Dxc",
  })
  @get()
  static getDxc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxc",
  })
  @post("{id}")
  static createDxc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
