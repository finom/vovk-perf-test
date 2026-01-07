import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gin")
export default class GinController {
  @operation({
    summary: "Get Gin",
  })
  @get()
  static getGin = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gin",
  })
  @post("{id}")
  static createGin = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
