import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abv")
export default class AbvController {
  @operation({
    summary: "Get Abv",
  })
  @get()
  static getAbv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abv",
  })
  @post("{id}")
  static createAbv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
