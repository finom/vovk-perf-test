import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfj")
export default class GfjController {
  @operation({
    summary: "Get Gfj",
  })
  @get()
  static getGfj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gfj",
  })
  @post("{id}")
  static createGfj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
