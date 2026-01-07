import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lew")
export default class LewController {
  @operation({
    summary: "Get Lew",
  })
  @get()
  static getLew = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lew",
  })
  @post("{id}")
  static createLew = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
