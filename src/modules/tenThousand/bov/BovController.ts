import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bov")
export default class BovController {
  @operation({
    summary: "Get Bov",
  })
  @get()
  static getBov = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bov",
  })
  @post("{id}")
  static createBov = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
