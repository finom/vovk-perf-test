import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kki")
export default class KkiController {
  @operation({
    summary: "Get Kki",
  })
  @get()
  static getKki = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kki",
  })
  @post("{id}")
  static createKki = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
