import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abl")
export default class AblController {
  @operation({
    summary: "Get Abl",
  })
  @get()
  static getAbl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abl",
  })
  @post("{id}")
  static createAbl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
