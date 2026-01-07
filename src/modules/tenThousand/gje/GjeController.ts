import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gje")
export default class GjeController {
  @operation({
    summary: "Get Gje",
  })
  @get()
  static getGje = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gje",
  })
  @post("{id}")
  static createGje = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
