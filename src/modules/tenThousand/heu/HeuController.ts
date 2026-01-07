import { procedure, prefix, get, post, operation } from "vovk";

@prefix("heu")
export default class HeuController {
  @operation({
    summary: "Get Heu",
  })
  @get()
  static getHeu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Heu",
  })
  @post("{id}")
  static createHeu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
