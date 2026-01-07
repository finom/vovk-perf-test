import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsv")
export default class BsvController {
  @operation({
    summary: "Get Bsv",
  })
  @get()
  static getBsv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bsv",
  })
  @post("{id}")
  static createBsv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
