import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ful")
export default class FulController {
  @operation({
    summary: "Get Ful",
  })
  @get()
  static getFul = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ful",
  })
  @post("{id}")
  static createFul = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
