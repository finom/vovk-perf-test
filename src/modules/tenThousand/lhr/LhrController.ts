import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhr")
export default class LhrController {
  @operation({
    summary: "Get Lhr",
  })
  @get()
  static getLhr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lhr",
  })
  @post("{id}")
  static createLhr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
