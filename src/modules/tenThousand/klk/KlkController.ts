import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klk")
export default class KlkController {
  @operation({
    summary: "Get Klk",
  })
  @get()
  static getKlk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Klk",
  })
  @post("{id}")
  static createKlk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
