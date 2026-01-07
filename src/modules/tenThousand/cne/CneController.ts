import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cne")
export default class CneController {
  @operation({
    summary: "Get Cne",
  })
  @get()
  static getCne = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cne",
  })
  @post("{id}")
  static createCne = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
