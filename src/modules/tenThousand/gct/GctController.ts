import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gct")
export default class GctController {
  @operation({
    summary: "Get Gct",
  })
  @get()
  static getGct = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gct",
  })
  @post("{id}")
  static createGct = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
