import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apd")
export default class ApdController {
  @operation({
    summary: "Get Apd",
  })
  @get()
  static getApd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Apd",
  })
  @post("{id}")
  static createApd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
