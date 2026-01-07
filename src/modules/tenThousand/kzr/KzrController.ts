import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzr")
export default class KzrController {
  @operation({
    summary: "Get Kzr",
  })
  @get()
  static getKzr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kzr",
  })
  @post("{id}")
  static createKzr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
