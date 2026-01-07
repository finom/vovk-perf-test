import { procedure, prefix, get, post, operation } from "vovk";

@prefix("goj")
export default class GojController {
  @operation({
    summary: "Get Goj",
  })
  @get()
  static getGoj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Goj",
  })
  @post("{id}")
  static createGoj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
