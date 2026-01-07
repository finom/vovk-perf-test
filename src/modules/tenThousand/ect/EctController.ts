import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ect")
export default class EctController {
  @operation({
    summary: "Get Ect",
  })
  @get()
  static getEct = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ect",
  })
  @post("{id}")
  static createEct = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
