import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfi")
export default class BfiController {
  @operation({
    summary: "Get Bfi",
  })
  @get()
  static getBfi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bfi",
  })
  @post("{id}")
  static createBfi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
