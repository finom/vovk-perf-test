import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gij")
export default class GijController {
  @operation({
    summary: "Get Gij",
  })
  @get()
  static getGij = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gij",
  })
  @post("{id}")
  static createGij = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
