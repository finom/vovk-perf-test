import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evl")
export default class EvlController {
  @operation({
    summary: "Get Evl",
  })
  @get()
  static getEvl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Evl",
  })
  @post("{id}")
  static createEvl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
