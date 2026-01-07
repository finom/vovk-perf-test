import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lui")
export default class LuiController {
  @operation({
    summary: "Get Lui",
  })
  @get()
  static getLui = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lui",
  })
  @post("{id}")
  static createLui = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
