import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ya")
export default class YaController {
  @operation({
    summary: "Get Ya",
  })
  @get()
  static getYa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ya",
  })
  @post("{id}")
  static createYa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
