import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijx")
export default class IjxController {
  @operation({
    summary: "Get Ijx",
  })
  @get()
  static getIjx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijx",
  })
  @post("{id}")
  static createIjx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
