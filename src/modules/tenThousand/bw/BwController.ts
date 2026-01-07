import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bw")
export default class BwController {
  @operation({
    summary: "Get Bw",
  })
  @get()
  static getBw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bw",
  })
  @post("{id}")
  static createBw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
