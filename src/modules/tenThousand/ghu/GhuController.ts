import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghu")
export default class GhuController {
  @operation({
    summary: "Get Ghu",
  })
  @get()
  static getGhu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ghu",
  })
  @post("{id}")
  static createGhu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
