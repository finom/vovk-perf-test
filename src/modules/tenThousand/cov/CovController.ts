import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cov")
export default class CovController {
  @operation({
    summary: "Get Cov",
  })
  @get()
  static getCov = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cov",
  })
  @post("{id}")
  static createCov = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
