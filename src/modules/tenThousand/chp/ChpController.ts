import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chp")
export default class ChpController {
  @operation({
    summary: "Get Chp",
  })
  @get()
  static getChp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Chp",
  })
  @post("{id}")
  static createChp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
