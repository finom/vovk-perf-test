import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eik")
export default class EikController {
  @operation({
    summary: "Get Eik",
  })
  @get()
  static getEik = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eik",
  })
  @post("{id}")
  static createEik = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
