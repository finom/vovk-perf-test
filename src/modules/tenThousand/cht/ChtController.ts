import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cht")
export default class ChtController {
  @operation({
    summary: "Get Cht",
  })
  @get()
  static getCht = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cht",
  })
  @post("{id}")
  static createCht = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
