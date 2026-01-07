import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fas")
export default class FasController {
  @operation({
    summary: "Get Fas",
  })
  @get()
  static getFas = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fas",
  })
  @post("{id}")
  static createFas = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
