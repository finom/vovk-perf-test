import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajx")
export default class AjxController {
  @operation({
    summary: "Get Ajx",
  })
  @get()
  static getAjx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ajx",
  })
  @post("{id}")
  static createAjx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
