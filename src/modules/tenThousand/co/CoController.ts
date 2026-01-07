import { procedure, prefix, get, post, operation } from "vovk";

@prefix("co")
export default class CoController {
  @operation({
    summary: "Get Co",
  })
  @get()
  static getCo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Co",
  })
  @post("{id}")
  static createCo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
