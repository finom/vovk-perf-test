import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kuk")
export default class KukController {
  @operation({
    summary: "Get Kuk",
  })
  @get()
  static getKuk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kuk",
  })
  @post("{id}")
  static createKuk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
