import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btr")
export default class BtrController {
  @operation({
    summary: "Get Btr",
  })
  @get()
  static getBtr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Btr",
  })
  @post("{id}")
  static createBtr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
