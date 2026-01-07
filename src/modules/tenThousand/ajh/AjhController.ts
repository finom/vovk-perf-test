import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajh")
export default class AjhController {
  @operation({
    summary: "Get Ajh",
  })
  @get()
  static getAjh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ajh",
  })
  @post("{id}")
  static createAjh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
