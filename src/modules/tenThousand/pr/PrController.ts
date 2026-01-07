import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pr")
export default class PrController {
  @operation({
    summary: "Get Pr",
  })
  @get()
  static getPr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Pr",
  })
  @post("{id}")
  static createPr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
