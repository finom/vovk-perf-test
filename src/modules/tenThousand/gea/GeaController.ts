import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gea")
export default class GeaController {
  @operation({
    summary: "Get Gea",
  })
  @get()
  static getGea = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gea",
  })
  @post("{id}")
  static createGea = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
