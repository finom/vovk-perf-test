import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnt")
export default class GntController {
  @operation({
    summary: "Get Gnt",
  })
  @get()
  static getGnt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gnt",
  })
  @post("{id}")
  static createGnt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
