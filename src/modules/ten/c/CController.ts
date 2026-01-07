import { procedure, prefix, get, post, operation } from "vovk";

@prefix("c")
export default class CController {
  @operation({
    summary: "Get C",
  })
  @get()
  static getC = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create C",
  })
  @post("{id}")
  static createC = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
