import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwn")
export default class BwnController {
  @operation({
    summary: "Get Bwn",
  })
  @get()
  static getBwn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwn",
  })
  @post("{id}")
  static createBwn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
