import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ken")
export default class KenController {
  @operation({
    summary: "Get Ken",
  })
  @get()
  static getKen = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ken",
  })
  @post("{id}")
  static createKen = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
