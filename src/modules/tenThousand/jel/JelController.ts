import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jel")
export default class JelController {
  @operation({
    summary: "Get Jel",
  })
  @get()
  static getJel = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jel",
  })
  @post("{id}")
  static createJel = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
