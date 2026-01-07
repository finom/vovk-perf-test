import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cse")
export default class CseController {
  @operation({
    summary: "Get Cse",
  })
  @get()
  static getCse = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cse",
  })
  @post("{id}")
  static createCse = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
