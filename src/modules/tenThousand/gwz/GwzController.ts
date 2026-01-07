import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwz")
export default class GwzController {
  @operation({
    summary: "Get Gwz",
  })
  @get()
  static getGwz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwz",
  })
  @post("{id}")
  static createGwz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
