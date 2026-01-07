import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzp")
export default class DzpController {
  @operation({
    summary: "Get Dzp",
  })
  @get()
  static getDzp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dzp",
  })
  @post("{id}")
  static createDzp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
