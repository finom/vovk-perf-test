import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hii")
export default class HiiController {
  @operation({
    summary: "Get Hii",
  })
  @get()
  static getHii = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hii",
  })
  @post("{id}")
  static createHii = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
