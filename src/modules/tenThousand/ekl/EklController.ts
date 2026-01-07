import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekl")
export default class EklController {
  @operation({
    summary: "Get Ekl",
  })
  @get()
  static getEkl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ekl",
  })
  @post("{id}")
  static createEkl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
