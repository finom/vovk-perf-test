import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jki")
export default class JkiController {
  @operation({
    summary: "Get Jki",
  })
  @get()
  static getJki = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jki",
  })
  @post("{id}")
  static createJki = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
