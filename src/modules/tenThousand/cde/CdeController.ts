import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cde")
export default class CdeController {
  @operation({
    summary: "Get Cde",
  })
  @get()
  static getCde = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cde",
  })
  @post("{id}")
  static createCde = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
