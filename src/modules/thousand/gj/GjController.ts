import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gj")
export default class GjController {
  @operation({
    summary: "Get Gj",
  })
  @get()
  static getGj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gj",
  })
  @post("{id}")
  static createGj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
