import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akh")
export default class AkhController {
  @operation({
    summary: "Get Akh",
  })
  @get()
  static getAkh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Akh",
  })
  @post("{id}")
  static createAkh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
