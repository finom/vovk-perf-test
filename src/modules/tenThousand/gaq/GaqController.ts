import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gaq")
export default class GaqController {
  @operation({
    summary: "Get Gaq",
  })
  @get()
  static getGaq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gaq",
  })
  @post("{id}")
  static createGaq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
