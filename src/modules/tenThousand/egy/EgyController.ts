import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egy")
export default class EgyController {
  @operation({
    summary: "Get Egy",
  })
  @get()
  static getEgy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Egy",
  })
  @post("{id}")
  static createEgy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
