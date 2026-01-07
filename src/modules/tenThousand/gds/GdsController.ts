import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gds")
export default class GdsController {
  @operation({
    summary: "Get Gds",
  })
  @get()
  static getGds = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gds",
  })
  @post("{id}")
  static createGds = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
