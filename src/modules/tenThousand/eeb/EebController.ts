import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eeb")
export default class EebController {
  @operation({
    summary: "Get Eeb",
  })
  @get()
  static getEeb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eeb",
  })
  @post("{id}")
  static createEeb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
