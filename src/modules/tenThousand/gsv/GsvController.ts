import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsv")
export default class GsvController {
  @operation({
    summary: "Get Gsv",
  })
  @get()
  static getGsv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gsv",
  })
  @post("{id}")
  static createGsv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
