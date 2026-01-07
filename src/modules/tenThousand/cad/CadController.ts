import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cad")
export default class CadController {
  @operation({
    summary: "Get Cad",
  })
  @get()
  static getCad = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cad",
  })
  @post("{id}")
  static createCad = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
