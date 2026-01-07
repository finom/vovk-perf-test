import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtt")
export default class GttController {
  @operation({
    summary: "Get Gtt",
  })
  @get()
  static getGtt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gtt",
  })
  @post("{id}")
  static createGtt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
