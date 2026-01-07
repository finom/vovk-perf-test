import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdz")
export default class BdzController {
  @operation({
    summary: "Get Bdz",
  })
  @get()
  static getBdz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bdz",
  })
  @post("{id}")
  static createBdz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
