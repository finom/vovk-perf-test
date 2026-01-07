import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajf")
export default class AjfController {
  @operation({
    summary: "Get Ajf",
  })
  @get()
  static getAjf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ajf",
  })
  @post("{id}")
  static createAjf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
