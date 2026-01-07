import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kya")
export default class KyaController {
  @operation({
    summary: "Get Kya",
  })
  @get()
  static getKya = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kya",
  })
  @post("{id}")
  static createKya = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
