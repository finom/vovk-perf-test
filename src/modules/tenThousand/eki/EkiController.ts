import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eki")
export default class EkiController {
  @operation({
    summary: "Get Eki",
  })
  @get()
  static getEki = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eki",
  })
  @post("{id}")
  static createEki = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
