import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajd")
export default class AjdController {
  @operation({
    summary: "Get Ajd",
  })
  @get()
  static getAjd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ajd",
  })
  @post("{id}")
  static createAjd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
