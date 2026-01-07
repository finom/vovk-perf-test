import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bad")
export default class BadController {
  @operation({
    summary: "Get Bad",
  })
  @get()
  static getBad = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bad",
  })
  @post("{id}")
  static createBad = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
