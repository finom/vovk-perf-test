import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbw")
export default class KbwController {
  @operation({
    summary: "Get Kbw",
  })
  @get()
  static getKbw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kbw",
  })
  @post("{id}")
  static createKbw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
