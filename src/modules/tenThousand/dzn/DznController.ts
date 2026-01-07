import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzn")
export default class DznController {
  @operation({
    summary: "Get Dzn",
  })
  @get()
  static getDzn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dzn",
  })
  @post("{id}")
  static createDzn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
