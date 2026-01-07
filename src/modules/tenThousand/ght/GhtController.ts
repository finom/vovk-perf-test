import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ght")
export default class GhtController {
  @operation({
    summary: "Get Ght",
  })
  @get()
  static getGht = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ght",
  })
  @post("{id}")
  static createGht = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
