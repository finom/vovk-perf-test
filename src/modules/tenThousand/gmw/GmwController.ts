import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmw")
export default class GmwController {
  @operation({
    summary: "Get Gmw",
  })
  @get()
  static getGmw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gmw",
  })
  @post("{id}")
  static createGmw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
