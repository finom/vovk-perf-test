import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzg")
export default class DzgController {
  @operation({
    summary: "Get Dzg",
  })
  @get()
  static getDzg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dzg",
  })
  @post("{id}")
  static createDzg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
