import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vg")
export default class VgController {
  @operation({
    summary: "Get Vg",
  })
  @get()
  static getVg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Vg",
  })
  @post("{id}")
  static createVg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
