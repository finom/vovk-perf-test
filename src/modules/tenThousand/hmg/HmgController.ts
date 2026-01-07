import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmg")
export default class HmgController {
  @operation({
    summary: "Get Hmg",
  })
  @get()
  static getHmg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hmg",
  })
  @post("{id}")
  static createHmg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
