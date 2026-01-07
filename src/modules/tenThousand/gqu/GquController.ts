import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqu")
export default class GquController {
  @operation({
    summary: "Get Gqu",
  })
  @get()
  static getGqu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gqu",
  })
  @post("{id}")
  static createGqu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
