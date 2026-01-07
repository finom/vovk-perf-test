import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkn")
export default class JknController {
  @operation({
    summary: "Get Jkn",
  })
  @get()
  static getJkn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jkn",
  })
  @post("{id}")
  static createJkn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
