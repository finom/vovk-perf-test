import { procedure, prefix, get, post, operation } from "vovk";

@prefix("koq")
export default class KoqController {
  @operation({
    summary: "Get Koq",
  })
  @get()
  static getKoq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Koq",
  })
  @post("{id}")
  static createKoq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
