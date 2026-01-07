import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eha")
export default class EhaController {
  @operation({
    summary: "Get Eha",
  })
  @get()
  static getEha = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eha",
  })
  @post("{id}")
  static createEha = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
