import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eez")
export default class EezController {
  @operation({
    summary: "Get Eez",
  })
  @get()
  static getEez = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eez",
  })
  @post("{id}")
  static createEez = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
