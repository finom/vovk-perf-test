import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lof")
export default class LofController {
  @operation({
    summary: "Get Lof",
  })
  @get()
  static getLof = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lof",
  })
  @post("{id}")
  static createLof = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
