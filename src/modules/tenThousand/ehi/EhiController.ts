import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehi")
export default class EhiController {
  @operation({
    summary: "Get Ehi",
  })
  @get()
  static getEhi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehi",
  })
  @post("{id}")
  static createEhi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
