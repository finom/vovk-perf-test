import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eeu")
export default class EeuController {
  @operation({
    summary: "Get Eeu",
  })
  @get()
  static getEeu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eeu",
  })
  @post("{id}")
  static createEeu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
