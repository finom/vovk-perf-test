import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmp")
export default class GmpController {
  @operation({
    summary: "Get Gmp",
  })
  @get()
  static getGmp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gmp",
  })
  @post("{id}")
  static createGmp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
