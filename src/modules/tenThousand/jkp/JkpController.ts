import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkp")
export default class JkpController {
  @operation({
    summary: "Get Jkp",
  })
  @get()
  static getJkp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jkp",
  })
  @post("{id}")
  static createJkp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
