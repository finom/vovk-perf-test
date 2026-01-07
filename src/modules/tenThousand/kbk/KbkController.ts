import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbk")
export default class KbkController {
  @operation({
    summary: "Get Kbk",
  })
  @get()
  static getKbk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kbk",
  })
  @post("{id}")
  static createKbk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
