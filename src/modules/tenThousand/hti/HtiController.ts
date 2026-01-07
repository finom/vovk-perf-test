import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hti")
export default class HtiController {
  @operation({
    summary: "Get Hti",
  })
  @get()
  static getHti = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hti",
  })
  @post("{id}")
  static createHti = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
