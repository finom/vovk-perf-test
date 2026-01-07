import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkv")
export default class JkvController {
  @operation({
    summary: "Get Jkv",
  })
  @get()
  static getJkv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jkv",
  })
  @post("{id}")
  static createJkv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
