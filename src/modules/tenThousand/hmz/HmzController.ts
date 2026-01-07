import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmz")
export default class HmzController {
  @operation({
    summary: "Get Hmz",
  })
  @get()
  static getHmz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hmz",
  })
  @post("{id}")
  static createHmz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
