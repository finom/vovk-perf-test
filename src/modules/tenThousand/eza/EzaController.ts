import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eza")
export default class EzaController {
  @operation({
    summary: "Get Eza",
  })
  @get()
  static getEza = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eza",
  })
  @post("{id}")
  static createEza = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
