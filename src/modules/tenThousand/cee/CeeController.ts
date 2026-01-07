import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cee")
export default class CeeController {
  @operation({
    summary: "Get Cee",
  })
  @get()
  static getCee = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cee",
  })
  @post("{id}")
  static createCee = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
