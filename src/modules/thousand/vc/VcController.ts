import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vc")
export default class VcController {
  @operation({
    summary: "Get Vc",
  })
  @get()
  static getVc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Vc",
  })
  @post("{id}")
  static createVc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
