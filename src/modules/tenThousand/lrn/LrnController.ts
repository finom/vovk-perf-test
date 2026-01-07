import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrn")
export default class LrnController {
  @operation({
    summary: "Get Lrn",
  })
  @get()
  static getLrn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lrn",
  })
  @post("{id}")
  static createLrn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
