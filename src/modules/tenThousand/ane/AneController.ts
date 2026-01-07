import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ane")
export default class AneController {
  @operation({
    summary: "Get Ane",
  })
  @get()
  static getAne = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ane",
  })
  @post("{id}")
  static createAne = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
