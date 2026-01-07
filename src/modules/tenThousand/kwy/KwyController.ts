import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwy")
export default class KwyController {
  @operation({
    summary: "Get Kwy",
  })
  @get()
  static getKwy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwy",
  })
  @post("{id}")
  static createKwy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
