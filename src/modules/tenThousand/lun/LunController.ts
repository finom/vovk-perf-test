import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lun")
export default class LunController {
  @operation({
    summary: "Get Lun",
  })
  @get()
  static getLun = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lun",
  })
  @post("{id}")
  static createLun = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
