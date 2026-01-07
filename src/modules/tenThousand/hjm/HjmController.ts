import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjm")
export default class HjmController {
  @operation({
    summary: "Get Hjm",
  })
  @get()
  static getHjm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hjm",
  })
  @post("{id}")
  static createHjm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
