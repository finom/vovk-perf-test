import { procedure, prefix, get, post, operation } from "vovk";

@prefix("key")
export default class KeyController {
  @operation({
    summary: "Get Key",
  })
  @get()
  static getKey = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Key",
  })
  @post("{id}")
  static createKey = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
