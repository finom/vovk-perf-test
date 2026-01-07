import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfw")
export default class BfwController {
  @operation({
    summary: "Get Bfw",
  })
  @get()
  static getBfw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bfw",
  })
  @post("{id}")
  static createBfw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
