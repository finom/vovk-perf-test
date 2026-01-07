import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmx")
export default class HmxController {
  @operation({
    summary: "Get Hmx",
  })
  @get()
  static getHmx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hmx",
  })
  @post("{id}")
  static createHmx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
