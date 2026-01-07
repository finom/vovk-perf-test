import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbq")
export default class KbqController {
  @operation({
    summary: "Get Kbq",
  })
  @get()
  static getKbq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kbq",
  })
  @post("{id}")
  static createKbq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
