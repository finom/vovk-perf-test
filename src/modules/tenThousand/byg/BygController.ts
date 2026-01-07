import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byg")
export default class BygController {
  @operation({
    summary: "Get Byg",
  })
  @get()
  static getByg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Byg",
  })
  @post("{id}")
  static createByg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
