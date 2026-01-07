import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cty")
export default class CtyController {
  @operation({
    summary: "Get Cty",
  })
  @get()
  static getCty = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cty",
  })
  @post("{id}")
  static createCty = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
