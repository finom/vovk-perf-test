import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vw")
export default class VwController {
  @operation({
    summary: "Get Vw",
  })
  @get()
  static getVw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Vw",
  })
  @post("{id}")
  static createVw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
