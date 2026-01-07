import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bub")
export default class BubController {
  @operation({
    summary: "Get Bub",
  })
  @get()
  static getBub = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bub",
  })
  @post("{id}")
  static createBub = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
