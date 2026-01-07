import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gko")
export default class GkoController {
  @operation({
    summary: "Get Gko",
  })
  @get()
  static getGko = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gko",
  })
  @post("{id}")
  static createGko = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
