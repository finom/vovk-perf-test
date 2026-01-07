import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpr")
export default class FprController {
  @operation({
    summary: "Get Fpr",
  })
  @get()
  static getFpr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpr",
  })
  @post("{id}")
  static createFpr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
