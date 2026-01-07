import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aya")
export default class AyaController {
  @operation({
    summary: "Get Aya",
  })
  @get()
  static getAya = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aya",
  })
  @post("{id}")
  static createAya = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
