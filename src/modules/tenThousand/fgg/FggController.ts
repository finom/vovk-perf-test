import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgg")
export default class FggController {
  @operation({
    summary: "Get Fgg",
  })
  @get()
  static getFgg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgg",
  })
  @post("{id}")
  static createFgg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
