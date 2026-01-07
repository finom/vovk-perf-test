import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jed")
export default class JedController {
  @operation({
    summary: "Get Jed",
  })
  @get()
  static getJed = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jed",
  })
  @post("{id}")
  static createJed = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
