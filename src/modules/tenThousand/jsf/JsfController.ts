import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsf")
export default class JsfController {
  @operation({
    summary: "Get Jsf",
  })
  @get()
  static getJsf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jsf",
  })
  @post("{id}")
  static createJsf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
