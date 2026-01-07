import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akb")
export default class AkbController {
  @operation({
    summary: "Get Akb",
  })
  @get()
  static getAkb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Akb",
  })
  @post("{id}")
  static createAkb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
