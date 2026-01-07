import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dos")
export default class DosController {
  @operation({
    summary: "Get Dos",
  })
  @get()
  static getDos = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dos",
  })
  @post("{id}")
  static createDos = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
