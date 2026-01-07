import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsv")
export default class LsvController {
  @operation({
    summary: "Get Lsv",
  })
  @get()
  static getLsv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lsv",
  })
  @post("{id}")
  static createLsv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
