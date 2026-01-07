import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpi")
export default class GpiController {
  @operation({
    summary: "Get Gpi",
  })
  @get()
  static getGpi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpi",
  })
  @post("{id}")
  static createGpi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
