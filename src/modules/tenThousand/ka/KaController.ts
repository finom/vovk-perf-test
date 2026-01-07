import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ka")
export default class KaController {
  @operation({
    summary: "Get Ka",
  })
  @get()
  static getKa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ka",
  })
  @post("{id}")
  static createKa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
