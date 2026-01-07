import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lox")
export default class LoxController {
  @operation({
    summary: "Get Lox",
  })
  @get()
  static getLox = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lox",
  })
  @post("{id}")
  static createLox = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
