import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpi")
export default class BpiController {
  @operation({
    summary: "Get Bpi",
  })
  @get()
  static getBpi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpi",
  })
  @post("{id}")
  static createBpi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
