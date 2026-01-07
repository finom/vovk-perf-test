import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avs")
export default class AvsController {
  @operation({
    summary: "Get Avs",
  })
  @get()
  static getAvs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avs",
  })
  @post("{id}")
  static createAvs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
