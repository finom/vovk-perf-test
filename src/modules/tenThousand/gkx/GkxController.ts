import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkx")
export default class GkxController {
  @operation({
    summary: "Get Gkx",
  })
  @get()
  static getGkx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gkx",
  })
  @post("{id}")
  static createGkx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
