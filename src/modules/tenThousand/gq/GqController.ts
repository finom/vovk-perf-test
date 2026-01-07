import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gq")
export default class GqController {
  @operation({
    summary: "Get Gq",
  })
  @get()
  static getGq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gq",
  })
  @post("{id}")
  static createGq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
