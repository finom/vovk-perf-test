import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hia")
export default class HiaController {
  @operation({
    summary: "Get Hia",
  })
  @get()
  static getHia = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hia",
  })
  @post("{id}")
  static createHia = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
