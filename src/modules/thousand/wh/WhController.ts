import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wh")
export default class WhController {
  @operation({
    summary: "Get Wh",
  })
  @get()
  static getWh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Wh",
  })
  @post("{id}")
  static createWh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
