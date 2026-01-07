import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wp")
export default class WpController {
  @operation({
    summary: "Get Wp",
  })
  @get()
  static getWp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Wp",
  })
  @post("{id}")
  static createWp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
