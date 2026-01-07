import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kz")
export default class KzController {
  @operation({
    summary: "Get Kz",
  })
  @get()
  static getKz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kz",
  })
  @post("{id}")
  static createKz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
