import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwi")
export default class DwiController {
  @operation({
    summary: "Get Dwi",
  })
  @get()
  static getDwi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwi",
  })
  @post("{id}")
  static createDwi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
