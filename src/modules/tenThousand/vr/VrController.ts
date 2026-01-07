import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vr")
export default class VrController {
  @operation({
    summary: "Get Vr",
  })
  @get()
  static getVr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Vr",
  })
  @post("{id}")
  static createVr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
