import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzv")
export default class DzvController {
  @operation({
    summary: "Get Dzv",
  })
  @get()
  static getDzv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dzv",
  })
  @post("{id}")
  static createDzv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
