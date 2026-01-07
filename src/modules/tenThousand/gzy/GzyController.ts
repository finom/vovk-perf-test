import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzy")
export default class GzyController {
  @operation({
    summary: "Get Gzy",
  })
  @get()
  static getGzy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gzy",
  })
  @post("{id}")
  static createGzy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
