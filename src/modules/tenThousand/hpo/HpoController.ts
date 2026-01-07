import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpo")
export default class HpoController {
  @operation({
    summary: "Get Hpo",
  })
  @get()
  static getHpo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hpo",
  })
  @post("{id}")
  static createHpo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
