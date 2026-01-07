import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljm")
export default class LjmController {
  @operation({
    summary: "Get Ljm",
  })
  @get()
  static getLjm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ljm",
  })
  @post("{id}")
  static createLjm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
