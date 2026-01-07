import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adv")
export default class AdvController {
  @operation({
    summary: "Get Adv",
  })
  @get()
  static getAdv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Adv",
  })
  @post("{id}")
  static createAdv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
