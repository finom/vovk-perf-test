import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjv")
export default class JjvController {
  @operation({
    summary: "Get Jjv",
  })
  @get()
  static getJjv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jjv",
  })
  @post("{id}")
  static createJjv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
