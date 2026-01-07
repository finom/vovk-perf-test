import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gka")
export default class GkaController {
  @operation({
    summary: "Get Gka",
  })
  @get()
  static getGka = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gka",
  })
  @post("{id}")
  static createGka = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
