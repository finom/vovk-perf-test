import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmt")
export default class HmtController {
  @operation({
    summary: "Get Hmt",
  })
  @get()
  static getHmt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hmt",
  })
  @post("{id}")
  static createHmt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
