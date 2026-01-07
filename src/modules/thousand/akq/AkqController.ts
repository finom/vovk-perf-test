import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akq")
export default class AkqController {
  @operation({
    summary: "Get Akq",
  })
  @get()
  static getAkq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Akq",
  })
  @post("{id}")
  static createAkq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
