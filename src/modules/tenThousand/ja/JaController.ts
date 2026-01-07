import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ja")
export default class JaController {
  @operation({
    summary: "Get Ja",
  })
  @get()
  static getJa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ja",
  })
  @post("{id}")
  static createJa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
