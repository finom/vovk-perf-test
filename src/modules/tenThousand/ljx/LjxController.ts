import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljx")
export default class LjxController {
  @operation({
    summary: "Get Ljx",
  })
  @get()
  static getLjx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ljx",
  })
  @post("{id}")
  static createLjx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
