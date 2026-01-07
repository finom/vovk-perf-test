import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbd")
export default class GbdController {
  @operation({
    summary: "Get Gbd",
  })
  @get()
  static getGbd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gbd",
  })
  @post("{id}")
  static createGbd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
