import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmh")
export default class GmhController {
  @operation({
    summary: "Get Gmh",
  })
  @get()
  static getGmh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gmh",
  })
  @post("{id}")
  static createGmh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
