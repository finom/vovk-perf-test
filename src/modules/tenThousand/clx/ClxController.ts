import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clx")
export default class ClxController {
  @operation({
    summary: "Get Clx",
  })
  @get()
  static getClx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Clx",
  })
  @post("{id}")
  static createClx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
