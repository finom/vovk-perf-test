import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afa")
export default class AfaController {
  @operation({
    summary: "Get Afa",
  })
  @get()
  static getAfa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Afa",
  })
  @post("{id}")
  static createAfa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
