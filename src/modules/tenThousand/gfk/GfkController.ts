import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfk")
export default class GfkController {
  @operation({
    summary: "Get Gfk",
  })
  @get()
  static getGfk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gfk",
  })
  @post("{id}")
  static createGfk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
