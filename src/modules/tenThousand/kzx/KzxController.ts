import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzx")
export default class KzxController {
  @operation({
    summary: "Get Kzx",
  })
  @get()
  static getKzx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kzx",
  })
  @post("{id}")
  static createKzx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
