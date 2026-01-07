import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bch")
export default class BchController {
  @operation({
    summary: "Get Bch",
  })
  @get()
  static getBch = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bch",
  })
  @post("{id}")
  static createBch = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
