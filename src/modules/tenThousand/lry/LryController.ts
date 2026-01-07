import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lry")
export default class LryController {
  @operation({
    summary: "Get Lry",
  })
  @get()
  static getLry = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lry",
  })
  @post("{id}")
  static createLry = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
