import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eex")
export default class EexController {
  @operation({
    summary: "Get Eex",
  })
  @get()
  static getEex = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eex",
  })
  @post("{id}")
  static createEex = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
