import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxa")
export default class HxaController {
  @operation({
    summary: "Get Hxa",
  })
  @get()
  static getHxa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxa",
  })
  @post("{id}")
  static createHxa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
