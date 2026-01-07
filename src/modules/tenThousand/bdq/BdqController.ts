import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdq")
export default class BdqController {
  @operation({
    summary: "Get Bdq",
  })
  @get()
  static getBdq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bdq",
  })
  @post("{id}")
  static createBdq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
