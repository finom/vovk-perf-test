import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxj")
export default class GxjController {
  @operation({
    summary: "Get Gxj",
  })
  @get()
  static getGxj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxj",
  })
  @post("{id}")
  static createGxj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
