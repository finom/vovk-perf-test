import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btt")
export default class BttController {
  @operation({
    summary: "Get Btt",
  })
  @get()
  static getBtt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Btt",
  })
  @post("{id}")
  static createBtt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
