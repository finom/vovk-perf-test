import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjp")
export default class JjpController {
  @operation({
    summary: "Get Jjp",
  })
  @get()
  static getJjp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jjp",
  })
  @post("{id}")
  static createJjp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
