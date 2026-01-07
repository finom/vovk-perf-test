import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eau")
export default class EauController {
  @operation({
    summary: "Get Eau",
  })
  @get()
  static getEau = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eau",
  })
  @post("{id}")
  static createEau = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
