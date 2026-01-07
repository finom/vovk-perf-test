import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljr")
export default class LjrController {
  @operation({
    summary: "Get Ljr",
  })
  @get()
  static getLjr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ljr",
  })
  @post("{id}")
  static createLjr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
