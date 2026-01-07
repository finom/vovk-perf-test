import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmr")
export default class GmrController {
  @operation({
    summary: "Get Gmr",
  })
  @get()
  static getGmr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gmr",
  })
  @post("{id}")
  static createGmr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
