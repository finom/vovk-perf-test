import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzc")
export default class DzcController {
  @operation({
    summary: "Get Dzc",
  })
  @get()
  static getDzc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dzc",
  })
  @post("{id}")
  static createDzc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
