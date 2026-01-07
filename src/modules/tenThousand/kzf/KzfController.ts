import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzf")
export default class KzfController {
  @operation({
    summary: "Get Kzf",
  })
  @get()
  static getKzf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kzf",
  })
  @post("{id}")
  static createKzf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
