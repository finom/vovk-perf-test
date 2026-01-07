import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbr")
export default class FbrController {
  @operation({
    summary: "Get Fbr",
  })
  @get()
  static getFbr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbr",
  })
  @post("{id}")
  static createFbr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
