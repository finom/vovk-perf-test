import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihq")
export default class IhqController {
  @operation({
    summary: "Get Ihq",
  })
  @get()
  static getIhq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihq",
  })
  @post("{id}")
  static createIhq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
