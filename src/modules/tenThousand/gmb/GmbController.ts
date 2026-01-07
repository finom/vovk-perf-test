import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmb")
export default class GmbController {
  @operation({
    summary: "Get Gmb",
  })
  @get()
  static getGmb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gmb",
  })
  @post("{id}")
  static createGmb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
