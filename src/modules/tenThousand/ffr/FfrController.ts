import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffr")
export default class FfrController {
  @operation({
    summary: "Get Ffr",
  })
  @get()
  static getFfr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ffr",
  })
  @post("{id}")
  static createFfr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
