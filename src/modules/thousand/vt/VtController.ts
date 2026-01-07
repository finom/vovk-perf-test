import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vt")
export default class VtController {
  @operation({
    summary: "Get Vt",
  })
  @get()
  static getVt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Vt",
  })
  @post("{id}")
  static createVt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
