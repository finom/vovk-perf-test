import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lj")
export default class LjController {
  @operation({
    summary: "Get Lj",
  })
  @get()
  static getLj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lj",
  })
  @post("{id}")
  static createLj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
