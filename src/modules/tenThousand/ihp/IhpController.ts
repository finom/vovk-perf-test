import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihp")
export default class IhpController {
  @operation({
    summary: "Get Ihp",
  })
  @get()
  static getIhp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihp",
  })
  @post("{id}")
  static createIhp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
