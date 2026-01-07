import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kca")
export default class KcaController {
  @operation({
    summary: "Get Kca",
  })
  @get()
  static getKca = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kca",
  })
  @post("{id}")
  static createKca = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
