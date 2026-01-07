import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atu")
export default class AtuController {
  @operation({
    summary: "Get Atu",
  })
  @get()
  static getAtu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Atu",
  })
  @post("{id}")
  static createAtu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
