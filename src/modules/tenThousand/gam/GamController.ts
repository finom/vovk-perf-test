import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gam")
export default class GamController {
  @operation({
    summary: "Get Gam",
  })
  @get()
  static getGam = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gam",
  })
  @post("{id}")
  static createGam = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
