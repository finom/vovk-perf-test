import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jql")
export default class JqlController {
  @operation({
    summary: "Get Jql",
  })
  @get()
  static getJql = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jql",
  })
  @post("{id}")
  static createJql = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
