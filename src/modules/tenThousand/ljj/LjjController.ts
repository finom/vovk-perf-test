import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljj")
export default class LjjController {
  @operation({
    summary: "Get Ljj",
  })
  @get()
  static getLjj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ljj",
  })
  @post("{id}")
  static createLjj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
