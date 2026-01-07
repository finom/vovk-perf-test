import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bii")
export default class BiiController {
  @operation({
    summary: "Get Bii",
  })
  @get()
  static getBii = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bii",
  })
  @post("{id}")
  static createBii = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
