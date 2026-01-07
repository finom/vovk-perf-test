import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esp")
export default class EspController {
  @operation({
    summary: "Get Esp",
  })
  @get()
  static getEsp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Esp",
  })
  @post("{id}")
  static createEsp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
