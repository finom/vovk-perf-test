import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwj")
export default class IwjController {
  @operation({
    summary: "Get Iwj",
  })
  @get()
  static getIwj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwj",
  })
  @post("{id}")
  static createIwj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
