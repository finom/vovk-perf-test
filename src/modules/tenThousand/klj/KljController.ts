import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klj")
export default class KljController {
  @operation({
    summary: "Get Klj",
  })
  @get()
  static getKlj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Klj",
  })
  @post("{id}")
  static createKlj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
