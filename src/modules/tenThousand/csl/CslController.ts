import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csl")
export default class CslController {
  @operation({
    summary: "Get Csl",
  })
  @get()
  static getCsl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Csl",
  })
  @post("{id}")
  static createCsl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
