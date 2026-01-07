import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdd")
export default class GddController {
  @operation({
    summary: "Get Gdd",
  })
  @get()
  static getGdd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gdd",
  })
  @post("{id}")
  static createGdd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
