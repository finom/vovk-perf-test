import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbp")
export default class HbpController {
  @operation({
    summary: "Get Hbp",
  })
  @get()
  static getHbp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hbp",
  })
  @post("{id}")
  static createHbp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
