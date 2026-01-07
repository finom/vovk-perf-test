import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grl")
export default class GrlController {
  @operation({
    summary: "Get Grl",
  })
  @get()
  static getGrl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Grl",
  })
  @post("{id}")
  static createGrl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
