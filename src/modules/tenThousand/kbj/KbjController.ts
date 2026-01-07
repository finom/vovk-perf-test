import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbj")
export default class KbjController {
  @operation({
    summary: "Get Kbj",
  })
  @get()
  static getKbj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kbj",
  })
  @post("{id}")
  static createKbj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
