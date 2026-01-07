import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmn")
export default class JmnController {
  @operation({
    summary: "Get Jmn",
  })
  @get()
  static getJmn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jmn",
  })
  @post("{id}")
  static createJmn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
