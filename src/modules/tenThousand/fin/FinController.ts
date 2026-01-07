import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fin")
export default class FinController {
  @operation({
    summary: "Get Fin",
  })
  @get()
  static getFin = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fin",
  })
  @post("{id}")
  static createFin = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
