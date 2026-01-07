import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kre")
export default class KreController {
  @operation({
    summary: "Get Kre",
  })
  @get()
  static getKre = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kre",
  })
  @post("{id}")
  static createKre = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
