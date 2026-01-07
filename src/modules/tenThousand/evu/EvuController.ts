import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evu")
export default class EvuController {
  @operation({
    summary: "Get Evu",
  })
  @get()
  static getEvu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Evu",
  })
  @post("{id}")
  static createEvu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
