import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvo")
export default class HvoController {
  @operation({
    summary: "Get Hvo",
  })
  @get()
  static getHvo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hvo",
  })
  @post("{id}")
  static createHvo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
