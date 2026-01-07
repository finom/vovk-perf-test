import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ids")
export default class IdsController {
  @operation({
    summary: "Get Ids",
  })
  @get()
  static getIds = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ids",
  })
  @post("{id}")
  static createIds = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
