import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ada")
export default class AdaController {
  @operation({
    summary: "Get Ada",
  })
  @get()
  static getAda = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ada",
  })
  @post("{id}")
  static createAda = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
