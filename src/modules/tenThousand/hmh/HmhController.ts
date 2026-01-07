import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmh")
export default class HmhController {
  @operation({
    summary: "Get Hmh",
  })
  @get()
  static getHmh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hmh",
  })
  @post("{id}")
  static createHmh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
