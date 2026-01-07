import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gus")
export default class GusController {
  @operation({
    summary: "Get Gus",
  })
  @get()
  static getGus = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gus",
  })
  @post("{id}")
  static createGus = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
