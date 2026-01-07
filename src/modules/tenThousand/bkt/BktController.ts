import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkt")
export default class BktController {
  @operation({
    summary: "Get Bkt",
  })
  @get()
  static getBkt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bkt",
  })
  @post("{id}")
  static createBkt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
