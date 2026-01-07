import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihj")
export default class IhjController {
  @operation({
    summary: "Get Ihj",
  })
  @get()
  static getIhj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihj",
  })
  @post("{id}")
  static createIhj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
