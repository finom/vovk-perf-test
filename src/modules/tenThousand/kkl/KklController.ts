import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkl")
export default class KklController {
  @operation({
    summary: "Get Kkl",
  })
  @get()
  static getKkl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kkl",
  })
  @post("{id}")
  static createKkl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
