import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzi")
export default class GziController {
  @operation({
    summary: "Get Gzi",
  })
  @get()
  static getGzi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gzi",
  })
  @post("{id}")
  static createGzi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
