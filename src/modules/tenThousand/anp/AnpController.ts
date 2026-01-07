import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anp")
export default class AnpController {
  @operation({
    summary: "Get Anp",
  })
  @get()
  static getAnp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Anp",
  })
  @post("{id}")
  static createAnp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
