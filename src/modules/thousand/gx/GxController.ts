import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gx")
export default class GxController {
  @operation({
    summary: "Get Gx",
  })
  @get()
  static getGx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gx",
  })
  @post("{id}")
  static createGx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
