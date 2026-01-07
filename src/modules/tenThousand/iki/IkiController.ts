import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iki")
export default class IkiController {
  @operation({
    summary: "Get Iki",
  })
  @get()
  static getIki = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iki",
  })
  @post("{id}")
  static createIki = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
