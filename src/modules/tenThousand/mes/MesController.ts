import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mes")
export default class MesController {
  @operation({
    summary: "Get Mes",
  })
  @get()
  static getMes = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mes",
  })
  @post("{id}")
  static createMes = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
