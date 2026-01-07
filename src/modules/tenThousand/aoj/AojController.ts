import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aoj")
export default class AojController {
  @operation({
    summary: "Get Aoj",
  })
  @get()
  static getAoj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aoj",
  })
  @post("{id}")
  static createAoj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
