import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjl")
export default class HjlController {
  @operation({
    summary: "Get Hjl",
  })
  @get()
  static getHjl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hjl",
  })
  @post("{id}")
  static createHjl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
