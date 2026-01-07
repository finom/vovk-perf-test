import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mas")
export default class MasController {
  @operation({
    summary: "Get Mas",
  })
  @get()
  static getMas = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mas",
  })
  @post("{id}")
  static createMas = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
