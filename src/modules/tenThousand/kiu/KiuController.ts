import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kiu")
export default class KiuController {
  @operation({
    summary: "Get Kiu",
  })
  @get()
  static getKiu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kiu",
  })
  @post("{id}")
  static createKiu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
