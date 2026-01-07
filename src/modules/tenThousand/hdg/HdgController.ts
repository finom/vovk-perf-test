import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdg")
export default class HdgController {
  @operation({
    summary: "Get Hdg",
  })
  @get()
  static getHdg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hdg",
  })
  @post("{id}")
  static createHdg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
