import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lan")
export default class LanController {
  @operation({
    summary: "Get Lan",
  })
  @get()
  static getLan = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lan",
  })
  @post("{id}")
  static createLan = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
