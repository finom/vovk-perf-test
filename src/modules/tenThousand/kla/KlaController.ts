import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kla")
export default class KlaController {
  @operation({
    summary: "Get Kla",
  })
  @get()
  static getKla = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kla",
  })
  @post("{id}")
  static createKla = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
