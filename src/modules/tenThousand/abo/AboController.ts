import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abo")
export default class AboController {
  @operation({
    summary: "Get Abo",
  })
  @get()
  static getAbo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abo",
  })
  @post("{id}")
  static createAbo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
