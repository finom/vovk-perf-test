import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbg")
export default class KbgController {
  @operation({
    summary: "Get Kbg",
  })
  @get()
  static getKbg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kbg",
  })
  @post("{id}")
  static createKbg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
