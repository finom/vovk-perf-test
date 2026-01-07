import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etz")
export default class EtzController {
  @operation({
    summary: "Get Etz",
  })
  @get()
  static getEtz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Etz",
  })
  @post("{id}")
  static createEtz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
