import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxu")
export default class DxuController {
  @operation({
    summary: "Get Dxu",
  })
  @get()
  static getDxu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxu",
  })
  @post("{id}")
  static createDxu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
