import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bay")
export default class BayController {
  @operation({
    summary: "Get Bay",
  })
  @get()
  static getBay = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bay",
  })
  @post("{id}")
  static createBay = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
