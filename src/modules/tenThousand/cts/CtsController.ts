import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cts")
export default class CtsController {
  @operation({
    summary: "Get Cts",
  })
  @get()
  static getCts = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cts",
  })
  @post("{id}")
  static createCts = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
