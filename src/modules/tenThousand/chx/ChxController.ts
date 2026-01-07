import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chx")
export default class ChxController {
  @operation({
    summary: "Get Chx",
  })
  @get()
  static getChx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Chx",
  })
  @post("{id}")
  static createChx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
