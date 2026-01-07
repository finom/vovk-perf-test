import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atv")
export default class AtvController {
  @operation({
    summary: "Get Atv",
  })
  @get()
  static getAtv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Atv",
  })
  @post("{id}")
  static createAtv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
