import { procedure, prefix, get, post, operation } from "vovk";

@prefix("im")
export default class ImController {
  @operation({
    summary: "Get Im",
  })
  @get()
  static getIm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Im",
  })
  @post("{id}")
  static createIm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
