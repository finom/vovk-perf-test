import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjv")
export default class KjvController {
  @operation({
    summary: "Get Kjv",
  })
  @get()
  static getKjv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kjv",
  })
  @post("{id}")
  static createKjv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
