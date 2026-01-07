import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcw")
export default class LcwController {
  @operation({
    summary: "Get Lcw",
  })
  @get()
  static getLcw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lcw",
  })
  @post("{id}")
  static createLcw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
