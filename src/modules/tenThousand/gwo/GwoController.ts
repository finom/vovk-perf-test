import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwo")
export default class GwoController {
  @operation({
    summary: "Get Gwo",
  })
  @get()
  static getGwo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwo",
  })
  @post("{id}")
  static createGwo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
