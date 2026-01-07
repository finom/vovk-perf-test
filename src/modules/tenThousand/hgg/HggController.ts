import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgg")
export default class HggController {
  @operation({
    summary: "Get Hgg",
  })
  @get()
  static getHgg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hgg",
  })
  @post("{id}")
  static createHgg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
