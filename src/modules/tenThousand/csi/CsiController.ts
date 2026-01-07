import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csi")
export default class CsiController {
  @operation({
    summary: "Get Csi",
  })
  @get()
  static getCsi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Csi",
  })
  @post("{id}")
  static createCsi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
