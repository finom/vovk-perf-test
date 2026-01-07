import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hki")
export default class HkiController {
  @operation({
    summary: "Get Hki",
  })
  @get()
  static getHki = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hki",
  })
  @post("{id}")
  static createHki = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
