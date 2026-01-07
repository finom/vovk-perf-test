import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmj")
export default class HmjController {
  @operation({
    summary: "Get Hmj",
  })
  @get()
  static getHmj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hmj",
  })
  @post("{id}")
  static createHmj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
