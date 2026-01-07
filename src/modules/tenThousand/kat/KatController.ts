import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kat")
export default class KatController {
  @operation({
    summary: "Get Kat",
  })
  @get()
  static getKat = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kat",
  })
  @post("{id}")
  static createKat = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
