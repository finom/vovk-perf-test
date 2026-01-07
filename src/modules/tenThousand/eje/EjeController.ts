import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eje")
export default class EjeController {
  @operation({
    summary: "Get Eje",
  })
  @get()
  static getEje = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eje",
  })
  @post("{id}")
  static createEje = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
