import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhq")
export default class BhqController {
  @operation({
    summary: "Get Bhq",
  })
  @get()
  static getBhq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhq",
  })
  @post("{id}")
  static createBhq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
