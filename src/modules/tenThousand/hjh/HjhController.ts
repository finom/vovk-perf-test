import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjh")
export default class HjhController {
  @operation({
    summary: "Get Hjh",
  })
  @get()
  static getHjh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hjh",
  })
  @post("{id}")
  static createHjh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
