import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzw")
export default class KzwController {
  @operation({
    summary: "Get Kzw",
  })
  @get()
  static getKzw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kzw",
  })
  @post("{id}")
  static createKzw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
