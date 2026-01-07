import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gou")
export default class GouController {
  @operation({
    summary: "Get Gou",
  })
  @get()
  static getGou = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gou",
  })
  @post("{id}")
  static createGou = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
