import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afk")
export default class AfkController {
  @operation({
    summary: "Get Afk",
  })
  @get()
  static getAfk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Afk",
  })
  @post("{id}")
  static createAfk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
