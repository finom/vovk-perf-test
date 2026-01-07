import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aed")
export default class AedController {
  @operation({
    summary: "Get Aed",
  })
  @get()
  static getAed = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aed",
  })
  @post("{id}")
  static createAed = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
