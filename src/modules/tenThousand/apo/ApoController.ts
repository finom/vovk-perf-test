import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apo")
export default class ApoController {
  @operation({
    summary: "Get Apo",
  })
  @get()
  static getApo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Apo",
  })
  @post("{id}")
  static createApo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
