import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aap")
export default class AapController {
  @operation({
    summary: "Get Aap",
  })
  @get()
  static getAap = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aap",
  })
  @post("{id}")
  static createAap = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
