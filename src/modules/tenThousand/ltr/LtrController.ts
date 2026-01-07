import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltr")
export default class LtrController {
  @operation({
    summary: "Get Ltr",
  })
  @get()
  static getLtr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ltr",
  })
  @post("{id}")
  static createLtr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
