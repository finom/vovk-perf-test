import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cd")
export default class CdController {
  @operation({
    summary: "Get Cd",
  })
  @get()
  static getCd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cd",
  })
  @post("{id}")
  static createCd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
