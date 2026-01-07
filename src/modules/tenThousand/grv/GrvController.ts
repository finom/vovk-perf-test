import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grv")
export default class GrvController {
  @operation({
    summary: "Get Grv",
  })
  @get()
  static getGrv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Grv",
  })
  @post("{id}")
  static createGrv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
