import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vd")
export default class VdController {
  @operation({
    summary: "Get Vd",
  })
  @get()
  static getVd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Vd",
  })
  @post("{id}")
  static createVd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
