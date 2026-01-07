import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzq")
export default class DzqController {
  @operation({
    summary: "Get Dzq",
  })
  @get()
  static getDzq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dzq",
  })
  @post("{id}")
  static createDzq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
