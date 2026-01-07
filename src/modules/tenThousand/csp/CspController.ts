import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csp")
export default class CspController {
  @operation({
    summary: "Get Csp",
  })
  @get()
  static getCsp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Csp",
  })
  @post("{id}")
  static createCsp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
