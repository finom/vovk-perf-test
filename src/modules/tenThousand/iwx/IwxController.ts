import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwx")
export default class IwxController {
  @operation({
    summary: "Get Iwx",
  })
  @get()
  static getIwx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwx",
  })
  @post("{id}")
  static createIwx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
