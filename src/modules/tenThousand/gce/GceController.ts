import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gce")
export default class GceController {
  @operation({
    summary: "Get Gce",
  })
  @get()
  static getGce = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gce",
  })
  @post("{id}")
  static createGce = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
