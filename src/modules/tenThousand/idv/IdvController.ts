import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idv")
export default class IdvController {
  @operation({
    summary: "Get Idv",
  })
  @get()
  static getIdv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idv",
  })
  @post("{id}")
  static createIdv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
