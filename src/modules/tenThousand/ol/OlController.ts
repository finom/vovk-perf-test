import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ol")
export default class OlController {
  @operation({
    summary: "Get Ol",
  })
  @get()
  static getOl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ol",
  })
  @post("{id}")
  static createOl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
