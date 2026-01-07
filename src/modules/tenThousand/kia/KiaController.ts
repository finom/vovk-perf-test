import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kia")
export default class KiaController {
  @operation({
    summary: "Get Kia",
  })
  @get()
  static getKia = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kia",
  })
  @post("{id}")
  static createKia = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
