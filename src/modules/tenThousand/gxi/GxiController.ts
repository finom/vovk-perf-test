import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxi")
export default class GxiController {
  @operation({
    summary: "Get Gxi",
  })
  @get()
  static getGxi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxi",
  })
  @post("{id}")
  static createGxi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
