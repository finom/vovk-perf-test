import { procedure, prefix, get, post, operation } from "vovk";

@prefix("got")
export default class GotController {
  @operation({
    summary: "Get Got",
  })
  @get()
  static getGot = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Got",
  })
  @post("{id}")
  static createGot = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
