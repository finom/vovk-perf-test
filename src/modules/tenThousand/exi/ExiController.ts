import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exi")
export default class ExiController {
  @operation({
    summary: "Get Exi",
  })
  @get()
  static getExi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exi",
  })
  @post("{id}")
  static createExi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
