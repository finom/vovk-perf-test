import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqv")
export default class HqvController {
  @operation({
    summary: "Get Hqv",
  })
  @get()
  static getHqv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqv",
  })
  @post("{id}")
  static createHqv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
