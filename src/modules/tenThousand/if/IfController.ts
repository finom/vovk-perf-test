import { procedure, prefix, get, post, operation } from "vovk";

@prefix("if")
export default class IfController {
  @operation({
    summary: "Get If",
  })
  @get()
  static getIf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create If",
  })
  @post("{id}")
  static createIf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
