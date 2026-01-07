import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzl")
export default class KzlController {
  @operation({
    summary: "Get Kzl",
  })
  @get()
  static getKzl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kzl",
  })
  @post("{id}")
  static createKzl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
