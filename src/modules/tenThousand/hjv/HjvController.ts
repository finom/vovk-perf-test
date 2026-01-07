import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjv")
export default class HjvController {
  @operation({
    summary: "Get Hjv",
  })
  @get()
  static getHjv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hjv",
  })
  @post("{id}")
  static createHjv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
