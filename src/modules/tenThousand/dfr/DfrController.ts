import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfr")
export default class DfrController {
  @operation({
    summary: "Get Dfr",
  })
  @get()
  static getDfr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfr",
  })
  @post("{id}")
  static createDfr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
