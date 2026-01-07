import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alb")
export default class AlbController {
  @operation({
    summary: "Get Alb",
  })
  @get()
  static getAlb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Alb",
  })
  @post("{id}")
  static createAlb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
