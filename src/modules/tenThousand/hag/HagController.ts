import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hag")
export default class HagController {
  @operation({
    summary: "Get Hag",
  })
  @get()
  static getHag = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hag",
  })
  @post("{id}")
  static createHag = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
