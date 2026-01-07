import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bob")
export default class BobController {
  @operation({
    summary: "Get Bob",
  })
  @get()
  static getBob = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bob",
  })
  @post("{id}")
  static createBob = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
