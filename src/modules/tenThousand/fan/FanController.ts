import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fan")
export default class FanController {
  @operation({
    summary: "Get Fan",
  })
  @get()
  static getFan = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fan",
  })
  @post("{id}")
  static createFan = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
