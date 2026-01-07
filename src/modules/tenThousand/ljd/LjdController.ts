import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljd")
export default class LjdController {
  @operation({
    summary: "Get Ljd",
  })
  @get()
  static getLjd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ljd",
  })
  @post("{id}")
  static createLjd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
