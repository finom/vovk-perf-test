import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcq")
export default class LcqController {
  @operation({
    summary: "Get Lcq",
  })
  @get()
  static getLcq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lcq",
  })
  @post("{id}")
  static createLcq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
