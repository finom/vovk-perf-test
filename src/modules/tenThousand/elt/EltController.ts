import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elt")
export default class EltController {
  @operation({
    summary: "Get Elt",
  })
  @get()
  static getElt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Elt",
  })
  @post("{id}")
  static createElt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
