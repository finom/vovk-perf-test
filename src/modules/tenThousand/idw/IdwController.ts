import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idw")
export default class IdwController {
  @operation({
    summary: "Get Idw",
  })
  @get()
  static getIdw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idw",
  })
  @post("{id}")
  static createIdw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
