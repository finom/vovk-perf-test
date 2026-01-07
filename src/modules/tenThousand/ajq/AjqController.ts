import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajq")
export default class AjqController {
  @operation({
    summary: "Get Ajq",
  })
  @get()
  static getAjq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ajq",
  })
  @post("{id}")
  static createAjq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
