import { procedure, prefix, get, post, operation } from "vovk";

@prefix("huc")
export default class HucController {
  @operation({
    summary: "Get Huc",
  })
  @get()
  static getHuc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Huc",
  })
  @post("{id}")
  static createHuc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
