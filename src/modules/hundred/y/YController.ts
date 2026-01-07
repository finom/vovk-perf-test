import { procedure, prefix, get, post, operation } from "vovk";

@prefix("y")
export default class YController {
  @operation({
    summary: "Get Y",
  })
  @get()
  static getY = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Y",
  })
  @post("{id}")
  static createY = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
