import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsy")
export default class GsyController {
  @operation({
    summary: "Get Gsy",
  })
  @get()
  static getGsy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gsy",
  })
  @post("{id}")
  static createGsy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
