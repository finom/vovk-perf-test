import { procedure, prefix, get, post, operation } from "vovk";

@prefix("app")
export default class AppController {
  @operation({
    summary: "Get App",
  })
  @get()
  static getApp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create App",
  })
  @post("{id}")
  static createApp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
