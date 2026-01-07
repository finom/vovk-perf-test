import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vf")
export default class VfController {
  @operation({
    summary: "Get Vf",
  })
  @get()
  static getVf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Vf",
  })
  @post("{id}")
  static createVf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
