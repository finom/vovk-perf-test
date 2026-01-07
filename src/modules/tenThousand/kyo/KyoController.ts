import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyo")
export default class KyoController {
  @operation({
    summary: "Get Kyo",
  })
  @get()
  static getKyo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kyo",
  })
  @post("{id}")
  static createKyo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
