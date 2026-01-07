import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hts")
export default class HtsController {
  @operation({
    summary: "Get Hts",
  })
  @get()
  static getHts = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hts",
  })
  @post("{id}")
  static createHts = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
