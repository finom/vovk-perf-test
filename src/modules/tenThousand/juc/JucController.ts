import { procedure, prefix, get, post, operation } from "vovk";

@prefix("juc")
export default class JucController {
  @operation({
    summary: "Get Juc",
  })
  @get()
  static getJuc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Juc",
  })
  @post("{id}")
  static createJuc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
