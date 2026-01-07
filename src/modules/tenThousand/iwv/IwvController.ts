import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwv")
export default class IwvController {
  @operation({
    summary: "Get Iwv",
  })
  @get()
  static getIwv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwv",
  })
  @post("{id}")
  static createIwv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
