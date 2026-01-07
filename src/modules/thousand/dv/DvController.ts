import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dv")
export default class DvController {
  @operation({
    summary: "Get Dv",
  })
  @get()
  static getDv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dv",
  })
  @post("{id}")
  static createDv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
