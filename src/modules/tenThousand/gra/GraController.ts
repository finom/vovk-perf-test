import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gra")
export default class GraController {
  @operation({
    summary: "Get Gra",
  })
  @get()
  static getGra = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gra",
  })
  @post("{id}")
  static createGra = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
