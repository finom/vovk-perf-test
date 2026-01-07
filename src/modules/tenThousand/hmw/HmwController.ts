import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmw")
export default class HmwController {
  @operation({
    summary: "Get Hmw",
  })
  @get()
  static getHmw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hmw",
  })
  @post("{id}")
  static createHmw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
