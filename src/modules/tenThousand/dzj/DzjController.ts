import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzj")
export default class DzjController {
  @operation({
    summary: "Get Dzj",
  })
  @get()
  static getDzj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dzj",
  })
  @post("{id}")
  static createDzj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
