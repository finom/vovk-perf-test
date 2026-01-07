import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bye")
export default class ByeController {
  @operation({
    summary: "Get Bye",
  })
  @get()
  static getBye = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bye",
  })
  @post("{id}")
  static createBye = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
