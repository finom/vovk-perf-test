import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gns")
export default class GnsController {
  @operation({
    summary: "Get Gns",
  })
  @get()
  static getGns = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gns",
  })
  @post("{id}")
  static createGns = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
