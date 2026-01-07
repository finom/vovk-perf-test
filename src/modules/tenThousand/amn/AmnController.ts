import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amn")
export default class AmnController {
  @operation({
    summary: "Get Amn",
  })
  @get()
  static getAmn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Amn",
  })
  @post("{id}")
  static createAmn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
