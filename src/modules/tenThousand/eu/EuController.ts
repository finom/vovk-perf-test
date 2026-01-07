import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eu")
export default class EuController {
  @operation({
    summary: "Get Eu",
  })
  @get()
  static getEu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eu",
  })
  @post("{id}")
  static createEu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
