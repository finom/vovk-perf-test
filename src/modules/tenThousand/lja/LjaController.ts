import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lja")
export default class LjaController {
  @operation({
    summary: "Get Lja",
  })
  @get()
  static getLja = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lja",
  })
  @post("{id}")
  static createLja = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
