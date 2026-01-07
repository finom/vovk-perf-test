import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gez")
export default class GezController {
  @operation({
    summary: "Get Gez",
  })
  @get()
  static getGez = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gez",
  })
  @post("{id}")
  static createGez = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
