import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajl")
export default class AjlController {
  @operation({
    summary: "Get Ajl",
  })
  @get()
  static getAjl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ajl",
  })
  @post("{id}")
  static createAjl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
