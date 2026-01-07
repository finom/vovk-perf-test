import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfz")
export default class GfzController {
  @operation({
    summary: "Get Gfz",
  })
  @get()
  static getGfz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gfz",
  })
  @post("{id}")
  static createGfz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
