import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgl")
export default class BglController {
  @operation({
    summary: "Get Bgl",
  })
  @get()
  static getBgl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgl",
  })
  @post("{id}")
  static createBgl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
