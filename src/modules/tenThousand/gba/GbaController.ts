import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gba")
export default class GbaController {
  @operation({
    summary: "Get Gba",
  })
  @get()
  static getGba = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gba",
  })
  @post("{id}")
  static createGba = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
