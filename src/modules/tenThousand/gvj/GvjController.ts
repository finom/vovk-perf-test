import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvj")
export default class GvjController {
  @operation({
    summary: "Get Gvj",
  })
  @get()
  static getGvj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gvj",
  })
  @post("{id}")
  static createGvj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
