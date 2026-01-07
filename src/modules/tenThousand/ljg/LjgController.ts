import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljg")
export default class LjgController {
  @operation({
    summary: "Get Ljg",
  })
  @get()
  static getLjg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ljg",
  })
  @post("{id}")
  static createLjg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
