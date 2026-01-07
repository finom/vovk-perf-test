import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcf")
export default class LcfController {
  @operation({
    summary: "Get Lcf",
  })
  @get()
  static getLcf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lcf",
  })
  @post("{id}")
  static createLcf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
