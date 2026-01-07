import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfw")
export default class GfwController {
  @operation({
    summary: "Get Gfw",
  })
  @get()
  static getGfw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gfw",
  })
  @post("{id}")
  static createGfw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
