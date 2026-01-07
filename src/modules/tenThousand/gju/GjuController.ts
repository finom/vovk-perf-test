import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gju")
export default class GjuController {
  @operation({
    summary: "Get Gju",
  })
  @get()
  static getGju = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gju",
  })
  @post("{id}")
  static createGju = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
