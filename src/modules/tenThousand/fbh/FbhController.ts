import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbh")
export default class FbhController {
  @operation({
    summary: "Get Fbh",
  })
  @get()
  static getFbh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbh",
  })
  @post("{id}")
  static createFbh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
