import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhi")
export default class JhiController {
  @operation({
    summary: "Get Jhi",
  })
  @get()
  static getJhi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jhi",
  })
  @post("{id}")
  static createJhi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
