import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bu")
export default class BuController {
  @operation({
    summary: "Get Bu",
  })
  @get()
  static getBu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bu",
  })
  @post("{id}")
  static createBu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
