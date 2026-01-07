import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbr")
export default class KbrController {
  @operation({
    summary: "Get Kbr",
  })
  @get()
  static getKbr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kbr",
  })
  @post("{id}")
  static createKbr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
