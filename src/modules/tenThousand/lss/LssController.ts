import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lss")
export default class LssController {
  @operation({
    summary: "Get Lss",
  })
  @get()
  static getLss = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lss",
  })
  @post("{id}")
  static createLss = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
