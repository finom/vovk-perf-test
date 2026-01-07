import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bug")
export default class BugController {
  @operation({
    summary: "Get Bug",
  })
  @get()
  static getBug = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bug",
  })
  @post("{id}")
  static createBug = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
