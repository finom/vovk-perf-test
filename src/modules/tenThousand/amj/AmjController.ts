import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amj")
export default class AmjController {
  @operation({
    summary: "Get Amj",
  })
  @get()
  static getAmj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Amj",
  })
  @post("{id}")
  static createAmj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
