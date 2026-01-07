import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klh")
export default class KlhController {
  @operation({
    summary: "Get Klh",
  })
  @get()
  static getKlh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Klh",
  })
  @post("{id}")
  static createKlh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
