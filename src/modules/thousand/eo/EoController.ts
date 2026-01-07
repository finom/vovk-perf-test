import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eo")
export default class EoController {
  @operation({
    summary: "Get Eo",
  })
  @get()
  static getEo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eo",
  })
  @post("{id}")
  static createEo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
