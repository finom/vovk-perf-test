import { procedure, prefix, get, post, operation } from "vovk";

@prefix("koy")
export default class KoyController {
  @operation({
    summary: "Get Koy",
  })
  @get()
  static getKoy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Koy",
  })
  @post("{id}")
  static createKoy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
