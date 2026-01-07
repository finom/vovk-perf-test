import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljb")
export default class LjbController {
  @operation({
    summary: "Get Ljb",
  })
  @get()
  static getLjb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ljb",
  })
  @post("{id}")
  static createLjb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
