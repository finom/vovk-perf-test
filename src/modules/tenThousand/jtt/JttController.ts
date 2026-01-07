import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtt")
export default class JttController {
  @operation({
    summary: "Get Jtt",
  })
  @get()
  static getJtt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jtt",
  })
  @post("{id}")
  static createJtt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
