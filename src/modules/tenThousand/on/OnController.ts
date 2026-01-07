import { procedure, prefix, get, post, operation } from "vovk";

@prefix("on")
export default class OnController {
  @operation({
    summary: "Get On",
  })
  @get()
  static getOn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create On",
  })
  @post("{id}")
  static createOn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
