import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igb")
export default class IgbController {
  @operation({
    summary: "Get Igb",
  })
  @get()
  static getIgb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igb",
  })
  @post("{id}")
  static createIgb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
