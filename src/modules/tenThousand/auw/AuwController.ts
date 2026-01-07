import { procedure, prefix, get, post, operation } from "vovk";

@prefix("auw")
export default class AuwController {
  @operation({
    summary: "Get Auw",
  })
  @get()
  static getAuw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Auw",
  })
  @post("{id}")
  static createAuw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
