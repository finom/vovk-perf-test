import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghd")
export default class GhdController {
  @operation({
    summary: "Get Ghd",
  })
  @get()
  static getGhd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ghd",
  })
  @post("{id}")
  static createGhd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
