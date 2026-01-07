import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbz")
export default class KbzController {
  @operation({
    summary: "Get Kbz",
  })
  @get()
  static getKbz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kbz",
  })
  @post("{id}")
  static createKbz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
