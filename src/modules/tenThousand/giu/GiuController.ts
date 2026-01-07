import { procedure, prefix, get, post, operation } from "vovk";

@prefix("giu")
export default class GiuController {
  @operation({
    summary: "Get Giu",
  })
  @get()
  static getGiu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Giu",
  })
  @post("{id}")
  static createGiu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
