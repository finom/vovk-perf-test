import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjb")
export default class HjbController {
  @operation({
    summary: "Get Hjb",
  })
  @get()
  static getHjb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hjb",
  })
  @post("{id}")
  static createHjb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
