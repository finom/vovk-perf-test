import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmn")
export default class HmnController {
  @operation({
    summary: "Get Hmn",
  })
  @get()
  static getHmn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hmn",
  })
  @post("{id}")
  static createHmn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
