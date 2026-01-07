import { procedure, prefix, get, post, operation } from "vovk";

@prefix("guk")
export default class GukController {
  @operation({
    summary: "Get Guk",
  })
  @get()
  static getGuk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Guk",
  })
  @post("{id}")
  static createGuk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
