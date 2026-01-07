import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kco")
export default class KcoController {
  @operation({
    summary: "Get Kco",
  })
  @get()
  static getKco = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kco",
  })
  @post("{id}")
  static createKco = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
