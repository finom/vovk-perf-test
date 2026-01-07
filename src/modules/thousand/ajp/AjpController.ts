import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajp")
export default class AjpController {
  @operation({
    summary: "Get Ajp",
  })
  @get()
  static getAjp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ajp",
  })
  @post("{id}")
  static createAjp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
