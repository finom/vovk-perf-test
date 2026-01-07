import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmp")
export default class HmpController {
  @operation({
    summary: "Get Hmp",
  })
  @get()
  static getHmp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hmp",
  })
  @post("{id}")
  static createHmp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
