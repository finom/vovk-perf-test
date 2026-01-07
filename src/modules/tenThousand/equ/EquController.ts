import { procedure, prefix, get, post, operation } from "vovk";

@prefix("equ")
export default class EquController {
  @operation({
    summary: "Get Equ",
  })
  @get()
  static getEqu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Equ",
  })
  @post("{id}")
  static createEqu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
