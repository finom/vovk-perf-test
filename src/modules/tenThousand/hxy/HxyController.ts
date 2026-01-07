import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxy")
export default class HxyController {
  @operation({
    summary: "Get Hxy",
  })
  @get()
  static getHxy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxy",
  })
  @post("{id}")
  static createHxy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
