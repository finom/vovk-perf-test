import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbv")
export default class KbvController {
  @operation({
    summary: "Get Kbv",
  })
  @get()
  static getKbv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kbv",
  })
  @post("{id}")
  static createKbv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
