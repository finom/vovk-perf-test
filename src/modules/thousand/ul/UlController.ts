import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ul")
export default class UlController {
  @operation({
    summary: "Get Ul",
  })
  @get()
  static getUl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ul",
  })
  @post("{id}")
  static createUl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
