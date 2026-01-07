import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwh")
export default class BwhController {
  @operation({
    summary: "Get Bwh",
  })
  @get()
  static getBwh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwh",
  })
  @post("{id}")
  static createBwh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
