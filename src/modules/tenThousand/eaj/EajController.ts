import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eaj")
export default class EajController {
  @operation({
    summary: "Get Eaj",
  })
  @get()
  static getEaj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eaj",
  })
  @post("{id}")
  static createEaj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
