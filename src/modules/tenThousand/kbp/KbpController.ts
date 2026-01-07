import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbp")
export default class KbpController {
  @operation({
    summary: "Get Kbp",
  })
  @get()
  static getKbp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kbp",
  })
  @post("{id}")
  static createKbp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
