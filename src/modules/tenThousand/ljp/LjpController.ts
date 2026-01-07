import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljp")
export default class LjpController {
  @operation({
    summary: "Get Ljp",
  })
  @get()
  static getLjp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ljp",
  })
  @post("{id}")
  static createLjp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
