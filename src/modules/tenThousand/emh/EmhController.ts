import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emh")
export default class EmhController {
  @operation({
    summary: "Get Emh",
  })
  @get()
  static getEmh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Emh",
  })
  @post("{id}")
  static createEmh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
