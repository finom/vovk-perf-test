import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eog")
export default class EogController {
  @operation({
    summary: "Get Eog",
  })
  @get()
  static getEog = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eog",
  })
  @post("{id}")
  static createEog = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
