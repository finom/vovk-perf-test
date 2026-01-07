import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nto")
export default class NtoController {
  @operation({
    summary: "Get Nto",
  })
  @get()
  static getNto = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nto",
  })
  @post("{id}")
  static createNto = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
