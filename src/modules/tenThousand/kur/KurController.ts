import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kur")
export default class KurController {
  @operation({
    summary: "Get Kur",
  })
  @get()
  static getKur = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kur",
  })
  @post("{id}")
  static createKur = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
