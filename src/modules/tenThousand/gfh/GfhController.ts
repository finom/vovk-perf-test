import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfh")
export default class GfhController {
  @operation({
    summary: "Get Gfh",
  })
  @get()
  static getGfh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gfh",
  })
  @post("{id}")
  static createGfh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
