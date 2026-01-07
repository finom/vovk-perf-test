import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwy")
export default class BwyController {
  @operation({
    summary: "Get Bwy",
  })
  @get()
  static getBwy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwy",
  })
  @post("{id}")
  static createBwy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
