import { procedure, prefix, get, post, operation } from "vovk";

@prefix("os")
export default class OsController {
  @operation({
    summary: "Get Os",
  })
  @get()
  static getOs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Os",
  })
  @post("{id}")
  static createOs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
