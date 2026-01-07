import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iww")
export default class IwwController {
  @operation({
    summary: "Get Iww",
  })
  @get()
  static getIww = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iww",
  })
  @post("{id}")
  static createIww = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
