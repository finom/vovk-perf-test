import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajc")
export default class AjcController {
  @operation({
    summary: "Get Ajc",
  })
  @get()
  static getAjc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ajc",
  })
  @post("{id}")
  static createAjc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
