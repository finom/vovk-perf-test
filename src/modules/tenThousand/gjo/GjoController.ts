import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjo")
export default class GjoController {
  @operation({
    summary: "Get Gjo",
  })
  @get()
  static getGjo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gjo",
  })
  @post("{id}")
  static createGjo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
