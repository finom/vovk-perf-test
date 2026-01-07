import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agv")
export default class AgvController {
  @operation({
    summary: "Get Agv",
  })
  @get()
  static getAgv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Agv",
  })
  @post("{id}")
  static createAgv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
