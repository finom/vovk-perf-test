import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dx")
export default class DxController {
  @operation({
    summary: "Get Dx",
  })
  @get()
  static getDx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dx",
  })
  @post("{id}")
  static createDx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
