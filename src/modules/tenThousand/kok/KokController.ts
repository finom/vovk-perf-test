import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kok")
export default class KokController {
  @operation({
    summary: "Get Kok",
  })
  @get()
  static getKok = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kok",
  })
  @post("{id}")
  static createKok = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
