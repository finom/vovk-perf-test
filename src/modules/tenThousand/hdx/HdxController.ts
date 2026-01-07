import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdx")
export default class HdxController {
  @operation({
    summary: "Get Hdx",
  })
  @get()
  static getHdx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hdx",
  })
  @post("{id}")
  static createHdx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
