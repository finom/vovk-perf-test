import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfk")
export default class DfkController {
  @operation({
    summary: "Get Dfk",
  })
  @get()
  static getDfk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfk",
  })
  @post("{id}")
  static createDfk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
