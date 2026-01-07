import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjj")
export default class HjjController {
  @operation({
    summary: "Get Hjj",
  })
  @get()
  static getHjj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hjj",
  })
  @post("{id}")
  static createHjj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
